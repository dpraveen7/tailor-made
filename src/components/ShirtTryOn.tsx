import { useEffect, useRef, useState } from 'react'
import './ShirtTryOn.css'

type Status = 'idle' | 'starting' | 'live' | 'captured' | 'error'

function ShirtTryOn() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [snapshot, setSnapshot] = useState<string | null>(null)
  const [error, setError] = useState('')

  const stopCamera = () => {
    streamRef.current?.getTracks().forEach((track) => track.stop())
    streamRef.current = null
  }

  useEffect(() => stopCamera, [])

  const startCamera = async () => {
    if (!navigator.mediaDevices?.getUserMedia) {
      setError('Camera is not supported in this browser.')
      setStatus('error')
      return
    }
    setStatus('starting')
    setSnapshot(null)
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 720 }, height: { ideal: 720 } },
        audio: false,
      })
      streamRef.current = stream
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        await videoRef.current.play()
      }
      setStatus('live')
    } catch {
      setError('Could not access the camera. Please allow camera permission and try again.')
      setStatus('error')
    }
  }

  const capture = () => {
    const video = videoRef.current
    if (!video) return
    const size = Math.min(video.videoWidth, video.videoHeight)
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    // Mirror so the snapshot matches the live selfie preview
    ctx.translate(size, 0)
    ctx.scale(-1, 1)
    ctx.drawImage(
      video,
      (video.videoWidth - size) / 2,
      (video.videoHeight - size) / 2,
      size,
      size,
      0,
      0,
      size,
      size,
    )
    setSnapshot(canvas.toDataURL('image/jpeg', 0.9))
    stopCamera()
    setStatus('captured')
  }

  const reset = () => {
    stopCamera()
    setSnapshot(null)
    setStatus('idle')
  }

  const cameraOn = status === 'starting' || status === 'live'

  return (
    <div className="tryon">
      <div className="tryon-stage">
        <div className="tryon-face">
          <video
            ref={videoRef}
            className={cameraOn ? 'visible' : ''}
            playsInline
            muted
          />
          {snapshot && <img src={snapshot} alt="Your try-on snapshot" />}
          {!cameraOn && !snapshot && (
            <button type="button" className="tryon-placeholder" onClick={startCamera}>
              <span className="tryon-placeholder-icon">📷</span>
              <span>Tap to add your face</span>
            </button>
          )}
        </div>

        <svg
          className="tryon-shirt"
          viewBox="0 0 400 500"
          aria-label="Formal shirt with tie"
          role="img"
        >
          {/* Neck */}
          <path d="M172 170 L228 170 L232 215 L168 215 Z" fill="#e0b99a" />
          {/* Shirt body */}
          <path
            d="M160 195 L70 232 Q34 248 28 300 L12 500 L388 500 L372 300 Q366 248 330 232 L240 195 Z"
            fill="#dde8f5"
            stroke="#b9c9dc"
            strokeWidth="2"
          />
          {/* Sleeve folds */}
          <path d="M92 262 L78 500 M308 262 L322 500" stroke="#c3d2e4" strokeWidth="2" fill="none" />
          {/* Placket and buttons */}
          <path d="M200 232 L200 500" stroke="#b9c9dc" strokeWidth="2" />
          {[285, 335, 385, 435, 485].map((y) => (
            <circle key={y} cx="208" cy={y} r="3.5" fill="#f7f9fc" stroke="#9fb3cb" />
          ))}
          {/* Chest pocket */}
          <path
            d="M250 290 L302 290 L302 340 Q276 350 250 340 Z"
            fill="none"
            stroke="#b9c9dc"
            strokeWidth="2"
          />
          {/* Tie */}
          <path d="M189 222 L211 222 L207 244 L193 244 Z" fill="#6d1a2a" />
          <path d="M193 244 L207 244 L219 410 L200 432 L181 410 Z" fill="#8b2336" />
          <path d="M195 270 L214 300 M190 320 L217 360" stroke="#6d1a2a" strokeWidth="3" opacity="0.5" />
          {/* Collar */}
          <path
            d="M166 186 L200 228 L150 252 L142 206 Z"
            fill="#eef3fa"
            stroke="#b9c9dc"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M234 186 L200 228 L250 252 L258 206 Z"
            fill="#eef3fa"
            stroke="#b9c9dc"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="tryon-controls">
        {status === 'idle' && (
          <button type="button" className="btn btn-primary" onClick={startCamera}>
            Try It On
          </button>
        )}
        {status === 'starting' && <p className="tryon-hint">Starting camera…</p>}
        {status === 'live' && (
          <>
            <button type="button" className="btn btn-primary" onClick={capture}>
              Capture
            </button>
            <button type="button" className="btn btn-outline" onClick={reset}>
              Stop
            </button>
          </>
        )}
        {status === 'captured' && (
          <>
            <button type="button" className="btn btn-primary" onClick={startCamera}>
              Retake
            </button>
            {snapshot && (
              <a className="btn btn-outline" href={snapshot} download="tailor-made-tryon.jpg">
                Save Face Photo
              </a>
            )}
          </>
        )}
        {status === 'error' && (
          <>
            <p className="tryon-hint">{error}</p>
            <button type="button" className="btn btn-primary" onClick={startCamera}>
              Try Again
            </button>
          </>
        )}
      </div>
      {status === 'live' && (
        <p className="tryon-hint">Centre your face in the oval, then press Capture.</p>
      )}
    </div>
  )
}

export default ShirtTryOn
