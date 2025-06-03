'use client'

import React, { useState, useEffect, useRef } from 'react'

// Responsive Button Component that changes based on breakpoint
function ResponsiveButton({ desktopProps, tabletProps, mobileProps }) {
  const [currentBreakpoint, setCurrentBreakpoint] = useState('desktop')

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth
      if (width <= 640) {
        setCurrentBreakpoint('mobile')
      } else if (width <= 1024) {
        setCurrentBreakpoint('tablet')
      } else {
        setCurrentBreakpoint('desktop')
      }
    }

    updateBreakpoint()
    window.addEventListener('resize', updateBreakpoint)
    return () => window.removeEventListener('resize', updateBreakpoint)
  }, [])

  const getCurrentProps = () => {
    switch (currentBreakpoint) {
      case 'mobile': return mobileProps
      case 'tablet': return tabletProps
      default: return desktopProps
    }
  }

  const currentProps = getCurrentProps()

  return (
    <button
      className="px-4 py-2 rounded font-medium transition-all duration-200 cursor-pointer hover:opacity-90"
      style={{
        backgroundColor: currentProps.backgroundColor,
        color: currentProps.color,
        borderRadius: currentProps.borderRadius,
        padding: currentProps.padding,
        fontSize: currentProps.fontSize,
        fontWeight: currentProps.fontWeight,
        border: currentProps.border,
        width: currentProps.width,
        height: currentProps.height
      }}
      onClick={() => {}}
    >
      {currentProps.text}
    </button>
  )
}

// Responsive Card Component that changes based on breakpoint
function ResponsiveCard({ desktopProps, tabletProps, mobileProps }) {
  const [currentBreakpoint, setCurrentBreakpoint] = useState('desktop')

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth
      if (width <= 640) {
        setCurrentBreakpoint('mobile')
      } else if (width <= 1024) {
        setCurrentBreakpoint('tablet')
      } else {
        setCurrentBreakpoint('desktop')
      }
    }

    updateBreakpoint()
    window.addEventListener('resize', updateBreakpoint)
    return () => window.removeEventListener('resize', updateBreakpoint)
  }, [])

  const getCurrentProps = () => {
    switch (currentBreakpoint) {
      case 'mobile': return mobileProps
      case 'tablet': return tabletProps
      default: return desktopProps
    }
  }

  const currentProps = getCurrentProps()

  return (
    <div
      className="card-component rounded-lg shadow-md border"
      style={{
        width: currentProps.width,
        height: currentProps.height,
        backgroundColor: currentProps.backgroundColor,
        borderColor: currentProps.borderColor,
        color: currentProps.textColor,
        padding: '24px',
        border: '1px solid ' + currentProps.borderColor
      }}
    >
      <h3 className="font-semibold mb-2" style={{ fontSize: '18px', marginBottom: '8px' }}>
        {currentProps.title}
      </h3>
      <p className="mb-4" style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
        {currentProps.description}
      </p>
      <div style={{ fontSize: '16px' }}>
        {currentProps.content}
      </div>
    </div>
  )
}

// Responsive Navbar Component with hamburger menu
function ResponsiveNavbar({ brand, links }) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentBreakpoint, setCurrentBreakpoint] = useState('desktop')

  // Ensure links is always an array
  const safeLinks = Array.isArray(links) ? links : []

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth
      if (width <= 768) {
        setCurrentBreakpoint('mobile')
      } else {
        setCurrentBreakpoint('desktop')
      }
    }

    updateBreakpoint()
    window.addEventListener('resize', updateBreakpoint)
    return () => window.removeEventListener('resize', updateBreakpoint)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Brand */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900">{brand}</span>
          </div>

          {/* Desktop Navigation */}
          {currentBreakpoint === 'desktop' && (
            <div className="flex items-center space-x-8">
              {safeLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div>
          )}

          {/* Mobile Hamburger Button */}
          {currentBreakpoint === 'mobile' && (
            <div className="flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 p-2"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Mobile Navigation Menu */}
        {currentBreakpoint === 'mobile' && isOpen && (
          <div className="border-t border-gray-200 pt-4 pb-3">
            <div className="space-y-1">
              {safeLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// Interactive Input Component
function InteractiveInput({ type, placeholder }) {
  const [value, setValue] = useState('')

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
    />
  )
}

// Interactive Form Component
function InteractiveForm({ title }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Form submitted successfully!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white border rounded-lg shadow-sm max-w-md">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Enter your name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea
          className="w-full px-3 py-2 border rounded-md"
          rows={4}
          placeholder="Enter your message"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        />
      </div>
      <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
        Send Message
      </button>
    </form>
  )
}

// Interactive Switch Component
function InteractiveSwitch({ label, defaultChecked }) {
  const [checked, setChecked] = useState(defaultChecked)

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-sm font-medium text-gray-900">{label}</span>
    </label>
  )
}

// Interactive Textarea Component
function InteractiveTextarea({ placeholder, rows }) {
  const [value, setValue] = useState('')

  return (
    <textarea
      placeholder={placeholder}
      rows={rows}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none w-full"
    />
  )
}

// Interactive Checkbox Component
function InteractiveCheckbox({ label, defaultChecked }) {
  const [checked, setChecked] = useState(defaultChecked)

  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <span className="text-sm font-medium text-gray-900">{label}</span>
    </label>
  )
}

// Interactive Slider Component
function InteractiveSlider({ min, max, defaultValue }) {
  const [value, setValue] = useState(defaultValue)

  return (
    <div className="w-full">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
      />
      <div className="text-center text-sm text-gray-600 mt-1">Value: {value}</div>
    </div>
  )
}

// Interactive Toggle Component
function InteractiveToggle({ defaultPressed, children }) {
  const [pressed, setPressed] = useState(defaultPressed)

  return (
    <button
      onClick={() => setPressed(!pressed)}
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-10 px-3 ${pressed ? 'bg-gray-100' : ''}`}
    >
      {children}
    </button>
  )
}

// Responsive Hold to Confirm Component that changes based on breakpoint
function ResponsiveHoldToConfirm({ desktopProps, tabletProps, mobileProps }) {
  const [currentBreakpoint, setCurrentBreakpoint] = useState('desktop')

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth
      if (width <= 640) {
        setCurrentBreakpoint('mobile')
      } else if (width <= 1024) {
        setCurrentBreakpoint('tablet')
      } else {
        setCurrentBreakpoint('desktop')
      }
    }

    updateBreakpoint()
    window.addEventListener('resize', updateBreakpoint)
    return () => window.removeEventListener('resize', updateBreakpoint)
  }, [])

  const getCurrentProps = () => {
    switch (currentBreakpoint) {
      case 'mobile': return mobileProps
      case 'tablet': return tabletProps
      default: return desktopProps
    }
  }

  const currentProps = getCurrentProps()

  return (
    <InteractiveHoldToConfirm
      text={currentProps.text}
      buttonColor={currentProps.buttonColor}
      buttonTextColor={currentProps.buttonTextColor}
      borderRadius={currentProps.borderRadius}
      holdDuration={currentProps.holdDuration}
      circleColor={currentProps.circleColor || '#3b82f6'}
    />
  )
}

// Interactive Hold to Confirm Component - Working React Version
function InteractiveHoldToConfirm({
  text = 'Hold to confirm',
  buttonColor = '#ffffff',
  buttonTextColor = '#000000',
  borderRadius = '24px',
  holdDuration = 2000,
  circleColor = '#3b82f6'
}) {
  const [isHolding, setIsHolding] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  // Use useRef for interval and timeout to persist across renders
  const intervalRef = useRef(null)
  const timeoutRef = useRef(null)

  const startHold = () => {
    if (isComplete) return

    console.log('🔵 Starting hold - Circle should be visible!', {
      circleColor,
      progress,
      parsedColor: getDynamicCircleColor(),
      isHolding,
      opacity: (isHolding || isComplete || progress > 0) ? 1 : 0.3
    })
    setIsHolding(true)
    setProgress(0)

    const startTime = Date.now()
    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime
      const newProgress = Math.min((elapsed / holdDuration) * 100, 100)
      setProgress(newProgress)
      console.log('🔄 Progress:', newProgress, '%')

      if (newProgress >= 100) {
        clearInterval(intervalRef.current)
      }
    }, 16)

    timeoutRef.current = setTimeout(() => {
      setIsComplete(true)
      setIsHolding(false)

      setTimeout(() => {
        setIsComplete(false)
        setProgress(0)
      }, 1000)
    }, holdDuration)
  }

  const stopHold = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsHolding(false)
    setProgress(0)
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  // Match the canvas component structure exactly
  const circleMinWidth = 50
  const circleMaxWidth = 100
  const circleSize = 1100 // Match canvas default
  const finalCircleSize = circleSize * 1.215 // 21.5% larger like canvas
  const circleRadius = (finalCircleSize - 20) / 2 // Match canvas calculation

  // Calculate dynamic circle stroke width based on progress (like canvas)
  const dynamicStrokeWidth = circleMinWidth + (progress / 100) * (circleMaxWidth - circleMinWidth)

  // Calculate dynamic circle color that starts white and gradually becomes the selected color (like canvas)
  const getDynamicCircleColor = () => {
    if (progress === 0) return '#ffffff' // Start with white

    // Handle CSS variables and hex colors
    let targetColor = circleColor

    // If it's a CSS variable, extract the fallback color or use a default
    if (targetColor.includes('var(')) {
      const fallbackMatch = targetColor.match(/var([^,]+,s*([^)]+))/)
      if (fallbackMatch) {
        targetColor = fallbackMatch[1].trim()
      } else {
        targetColor = '#3b82f6' // Default blue
      }
    }

    // Ensure we have a valid hex color
    if (!targetColor.startsWith('#')) {
      targetColor = '#3b82f6' // Default blue
    }

    // Parse the target color (hex to RGB)
    const r = parseInt(targetColor.slice(1, 3), 16)
    const g = parseInt(targetColor.slice(3, 5), 16)
    const b = parseInt(targetColor.slice(5, 7), 16)

    // Calculate interpolation from white (255,255,255) to target color
    const progressRatio = progress / 100
    const currentR = Math.round(255 + (r - 255) * progressRatio)
    const currentG = Math.round(255 + (g - 255) * progressRatio)
    const currentB = Math.round(255 + (b - 255) * progressRatio)

    return 'rgb(' + currentR + ', ' + currentG + ', ' + currentB + ')'
  }

  // Calculate dynamic button scale based on progress (like canvas)
  const buttonScale = (isHolding || isComplete)
    ? 1 - (progress / 100) * 0.3  // Shrinks from 1.0 to 0.7 as progress increases, stays small when complete
    : 1    // Normal size only when idle (not holding and not complete)

  return (
    <div className="relative" data-no-drag="true" style={{ display: 'inline-block', padding: (circleMaxWidth + 10) + 'px' }}>
      <button
        className="hold-to-confirm-button relative overflow-visible font-medium cursor-pointer focus:outline-none select-none touch-none px-6 py-3 rounded-full"
        onMouseDown={startHold}
        onMouseUp={stopHold}
        onMouseLeave={stopHold}
        onTouchStart={startHold}
        onTouchEnd={stopHold}
        style={{
          backgroundColor: buttonColor,
          color: buttonTextColor,
          borderRadius: borderRadius,
          background: isHolding || isComplete
            ? 'linear-gradient(to right, ' + circleColor + ' ' + progress + '%, ' + buttonColor + ' ' + progress + '%)'
            : buttonColor,
          transform: 'scale(' + buttonScale + ')',
          border: 'none',
          minWidth: '140px',
          minHeight: '48px'
        }}
      >
        <span style={{ position: 'relative', zIndex: 5 }}>
          {text}
        </span>

      </button>

      {/* Circle positioned EXACTLY like canvas version - outside button */}
      <svg
        className="pointer-events-none"
        viewBox="0 0 1536.5 1536.5"
        style={{
          position: 'absolute',
          top: '0px',
          left: '0px',
          width: '100%',
          height: '100%',
          transform: 'rotate(-90deg)',
          opacity: (isHolding || isComplete || progress > 0) ? 1 : 0.3
        }}
      >
        {/* Progress circle with exact canvas positioning and dynamic behavior */}
        <circle
          className="hold-to-confirm-circle"
          cx="768.25"
          cy="768.25"
          r="658.25"
          fill="none"
          stroke={getDynamicCircleColor()}
          strokeWidth={Math.max(dynamicStrokeWidth, 2)}
          strokeLinecap="round"
          strokeDasharray="4135.906728450963"
          strokeDashoffset={4135.906728450963 * (1 - progress / 100)}
          style={{
            filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.4))'
          }}
        />
      </svg>
    </div>
  )
}

export default function Home() {
  const [currentBreakpoint, setCurrentBreakpoint] = useState('desktop')

  // Detect screen size and update breakpoint
  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth
      if (width <= 640) {
        setCurrentBreakpoint('mobile')
      } else if (width <= 1024) {
        setCurrentBreakpoint('tablet')
      } else {
        setCurrentBreakpoint('desktop')
      }
    }

    updateBreakpoint()
    window.addEventListener('resize', updateBreakpoint)
    return () => window.removeEventListener('resize', updateBreakpoint)
  }, [])

  return (
    <div
      className="canvas-container min-h-screen relative overflow-auto"
      style={{
        minHeight: '1080px',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'var(--theme-background, #f8fafc)',
        margin: 0,
        padding: 0,
        position: 'relative'
      }}
      data-breakpoint={currentBreakpoint}
    >
      {/* Debug indicator */}
      <div
        style={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          backgroundColor: 'rgba(0,0,0,0.8)',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '4px',
          fontSize: '12px',
          zIndex: 9999,
          fontFamily: 'monospace'
        }}
      >
        {currentBreakpoint}: {typeof window !== 'undefined' ? window.innerWidth : 0}px
      </div>

      <div data-component-id="comp-5" className="absolute transition-all cursor-default" style={{
      left: '398px',
      top: '355px',
      width: 'auto',
      height: 'auto',
      padding: '0',
      '--desktop-left': '398px',
      '--desktop-top': '355px',
      '--tablet-left': '398px',
      '--tablet-top': '355px',
      '--mobile-left': '398px',
      '--mobile-top': '355px'
    }}><div className="w-full">
          <div className="flex border-b border-gray-200 mb-4">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all bg-white text-black shadow-sm border-b-2 border-blue-500">Account</button><button className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all text-gray-600 hover:text-black">Password</button><button className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all text-gray-600 hover:text-black">Settings</button>
          </div>
          <div className="p-4">
            Make changes to your account here. Click save when you're done.
          </div>
        </div></div>
      <div data-component-id="comp-4" className="absolute transition-all cursor-default" style={{
      left: '634px',
      top: '675px',
      width: 'auto',
      height: 'auto',
      padding: '0',
      '--desktop-left': '634px',
      '--desktop-top': '675px',
      '--tablet-left': '634px',
      '--tablet-top': '675px',
      '--mobile-left': '634px',
      '--mobile-top': '675px'
    }}><ResponsiveHoldToConfirm
          desktopProps={{"text":"Hold to confirm","buttonColor":"#ffffff","buttonTextColor":"#000000","borderRadius":"24px","holdDuration":2000,"circleColor":"var(--theme-primary, #3b82f6)","circleSize":1100,"circleMinWidth":50,"circleMaxWidth":100,"buttonWidth":"100%","buttonHeight":"auto"}}
          tabletProps={{"text":"Hold to confirm","buttonColor":"#ffffff","buttonTextColor":"#000000","borderRadius":"24px","holdDuration":2000,"circleColor":"var(--theme-primary, #3b82f6)","circleSize":1100,"circleMinWidth":50,"circleMaxWidth":100,"buttonWidth":"100%","buttonHeight":"auto"}}
          mobileProps={{"text":"Hold to confirm","buttonColor":"#ffffff","buttonTextColor":"#000000","borderRadius":"24px","holdDuration":2000,"circleColor":"var(--theme-primary, #3b82f6)","circleSize":1100,"circleMinWidth":50,"circleMaxWidth":100,"buttonWidth":"100%","buttonHeight":"auto"}}
        /></div>
      <div data-component-id="comp-1" className="absolute transition-all cursor-default" style={{
      left: '144px',
      top: '72px',
      width: 'auto',
      height: 'auto',
      padding: '0',
      '--desktop-left': '144px',
      '--desktop-top': '72px',
      '--tablet-left': '144px',
      '--tablet-top': '72px',
      '--mobile-left': '144px',
      '--mobile-top': '72px'
    }}><ResponsiveButton
          desktopProps={{"text":"Button","backgroundColor":"var(--theme-primary, #3b82f6)","color":"var(--theme-surface, #ffffff)","borderRadius":"6px","padding":"8px 16px","fontSize":"14px","fontWeight":"500","border":"none","width":"auto","height":"auto"}}
          tabletProps={{"text":"Button","backgroundColor":"var(--theme-primary, #3b82f6)","color":"var(--theme-surface, #ffffff)","borderRadius":"6px","padding":"8px 16px","fontSize":"14px","fontWeight":"500","border":"none","width":"auto","height":"auto"}}
          mobileProps={{"text":"Button","backgroundColor":"var(--theme-primary, #3b82f6)","color":"var(--theme-surface, #ffffff)","borderRadius":"6px","padding":"8px 16px","fontSize":"14px","fontWeight":"500","border":"none","width":"auto","height":"auto"}}
        /></div>
      <div data-component-id="comp-2" className="absolute transition-all cursor-default" style={{
      left: '133px',
      top: '526px',
      width: 'auto',
      height: 'auto',
      padding: '0',
      '--desktop-left': '133px',
      '--desktop-top': '526px',
      '--tablet-left': '133px',
      '--tablet-top': '526px',
      '--mobile-left': '133px',
      '--mobile-top': '526px'
    }}><ResponsiveCard
          desktopProps={{"title":"Card Title","description":"Card description","content":"Card content","backgroundColor":"var(--theme-surface, #ffffff)","borderColor":"var(--theme-border, #e5e7eb)","textColor":"var(--theme-text, #1f2937)","width":"auto","height":"auto"}}
          tabletProps={{"title":"Card Title","description":"Card description","content":"Card content","backgroundColor":"var(--theme-surface, #ffffff)","borderColor":"var(--theme-border, #e5e7eb)","textColor":"var(--theme-text, #1f2937)","width":"auto","height":"auto"}}
          mobileProps={{"title":"Card Title","description":"Card description","content":"Card content","backgroundColor":"var(--theme-surface, #ffffff)","borderColor":"var(--theme-border, #e5e7eb)","textColor":"var(--theme-text, #1f2937)","width":"auto","height":"auto"}}
        /></div>
      <div data-component-id="comp-3" className="absolute transition-all cursor-default" style={{
      left: '598px',
      top: '114px',
      width: 'auto',
      height: 'auto',
      padding: '0',
      '--desktop-left': '598px',
      '--desktop-top': '114px',
      '--tablet-left': '598px',
      '--tablet-top': '114px',
      '--mobile-left': '598px',
      '--mobile-top': '114px'
    }}><ResponsiveHoldToConfirm
          desktopProps={{"text":"Hold to confirm","buttonColor":"#ffffff","buttonTextColor":"#000000","borderRadius":"24px","holdDuration":2000,"circleColor":"var(--theme-primary, #3b82f6)","circleSize":1100,"circleMinWidth":50,"circleMaxWidth":100,"buttonWidth":"100%","buttonHeight":"auto"}}
          tabletProps={{"text":"Hold to confirm","buttonColor":"#ffffff","buttonTextColor":"#000000","borderRadius":"24px","holdDuration":2000,"circleColor":"var(--theme-primary, #3b82f6)","circleSize":1100,"circleMinWidth":50,"circleMaxWidth":100,"buttonWidth":"100%","buttonHeight":"auto"}}
          mobileProps={{"text":"Hold to confirm","buttonColor":"#ffffff","buttonTextColor":"#000000","borderRadius":"24px","holdDuration":2000,"circleColor":"var(--theme-primary, #3b82f6)","circleSize":1100,"circleMinWidth":50,"circleMaxWidth":100,"buttonWidth":"100%","buttonHeight":"auto"}}
        /></div>
    </div>
  )
}