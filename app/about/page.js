'use client'

import React, { useState, useEffect } from 'react'
import Navigation from '../components/Navigation'

export default function about() {
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
    <>
      <Navigation />
      <div
        className="canvas-container min-h-screen relative overflow-auto"
        style={{
          minHeight: '1080px',
          width: '100vw',
          height: '100vh',
          backgroundColor: 'var(--theme-background)',
          margin: 0,
          padding: 0,
          position: 'relative'
        }}
        data-breakpoint={currentBreakpoint}
      >
        <div data-component-id="comp-4" className="absolute transition-all cursor-default" style={{
      left: '18px',
      top: '26px',
      width: 'auto',
      height: 'auto',
      padding: '0',
      '--desktop-left': '18px',
      '--desktop-top': '26px',
      '--tablet-left': '48px',
      '--tablet-top': '56px',
      '--mobile-left': '5px',
      '--mobile-top': '5px'
    }}><ResponsiveCard
          desktopProps={{"title":"Card Title","description":"Card description","content":"Card content","backgroundColor":"var(--theme-surface, #ffffff)","borderColor":"var(--theme-border, #e5e7eb)","textColor":"var(--theme-text, #1f2937)","width":"auto","height":"auto"}}
          tabletProps={{"title":"Hi","description":"Card description","content":"Card content","backgroundColor":"var(--theme-surface, #ffffff)","borderColor":"var(--theme-border, #e5e7eb)","textColor":"var(--theme-text, #1f2937)","width":"auto","height":"auto"}}
          mobileProps={{"title":"Hi","description":"Card description","content":"Card content","backgroundColor":"var(--theme-surface, #ffffff)","borderColor":"var(--theme-border, #e5e7eb)","textColor":"var(--theme-text, #1f2937)","width":"auto","height":"auto"}}
        /></div>
        <div data-component-id="comp-5" className="absolute transition-all cursor-default" style={{
      left: '231px',
      top: '126px',
      width: 'auto',
      height: 'auto',
      padding: '0',
      '--desktop-left': '231px',
      '--desktop-top': '126px',
      '--tablet-left': '231px',
      '--tablet-top': '126px',
      '--mobile-left': '231px',
      '--mobile-top': '126px'
    }}><InteractiveSwitch label="Switch" defaultChecked={false} /></div>
        <div data-component-id="comp-6" className="absolute transition-all cursor-default" style={{
      left: '215px',
      top: '46px',
      width: 'auto',
      height: 'auto',
      padding: '0',
      '--desktop-left': '215px',
      '--desktop-top': '46px',
      '--tablet-left': '215px',
      '--tablet-top': '46px',
      '--mobile-left': '215px',
      '--mobile-top': '46px'
    }}><InteractiveInput type="text" placeholder="Enter text..." /></div>
        <div data-component-id="comp-7" className="absolute transition-all cursor-default" style={{
      left: '433px',
      top: '38px',
      width: 'auto',
      height: 'auto',
      padding: '0',
      '--desktop-left': '433px',
      '--desktop-top': '38px',
      '--tablet-left': '0px',
      '--tablet-top': '277px',
      '--mobile-left': '189px',
      '--mobile-top': '87px'
    }}><nav className="shadow-sm border-b" style={{
          backgroundColor: 'var(--theme-surface, #ffffff)',
          borderColor: 'var(--theme-border, #e5e7eb)',
          padding: '0'
        }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <span className="text-xl font-bold" style={{
                  color: 'var(--theme-text, #1f2937)',
                  fontSize: '1.25rem'
                }}>My Brand</span>
              </div>
              <div className="flex items-center space-x-8">
                
                  <a href="#" className="px-3 py-2 text-sm font-medium transition-colors" style={{
                    color: 'var(--theme-text-secondary, #6b7280)',
                    fontSize: '0.875rem'
                  }}>Dashboard</a>
                
                  <a href="#" className="px-3 py-2 text-sm font-medium transition-colors" style={{
                    color: 'var(--theme-text-secondary, #6b7280)',
                    fontSize: '0.875rem'
                  }}>Products</a>
                
                  <a href="#" className="px-3 py-2 text-sm font-medium transition-colors" style={{
                    color: 'var(--theme-text-secondary, #6b7280)',
                    fontSize: '0.875rem'
                  }}>Customers</a>
                
                  <a href="#" className="px-3 py-2 text-sm font-medium transition-colors" style={{
                    color: 'var(--theme-text-secondary, #6b7280)',
                    fontSize: '0.875rem'
                  }}>Settings</a>
                
              </div>
            </div>
          </div>
        </nav></div>
        <div data-component-id="comp-8" className="absolute transition-all cursor-default" style={{
      left: '232px',
      top: '373px',
      width: 'auto',
      height: 'auto',
      padding: '0',
      '--desktop-left': '232px',
      '--desktop-top': '373px',
      '--tablet-left': '262px',
      '--tablet-top': '403px',
      '--mobile-left': '123px',
      '--mobile-top': '449px'
    }}><ResponsiveButton
          desktopProps={{"text":"Button","backgroundColor":"#9d3434","color":"var(--theme-surface, #ffffff)","borderRadius":"6px","padding":"8px 16px","fontSize":"14px","fontWeight":"500","border":"none","width":"auto","height":"auto"}}
          tabletProps={{"text":"Button","backgroundColor":"#9d3434","color":"var(--theme-surface, #ffffff)","borderRadius":"6px","padding":"8px 16px","fontSize":"14px","fontWeight":"500","border":"none","width":"auto","height":"auto"}}
          mobileProps={{"text":"Button","backgroundColor":"#9d3434","color":"var(--theme-surface, #ffffff)","borderRadius":"6px","padding":"8px 16px","fontSize":"14px","fontWeight":"500","border":"none","width":"auto","height":"auto"}}
        /></div>
        <div data-component-id="comp-1" className="absolute transition-all cursor-default" style={{
      left: '668px',
      top: '336px',
      width: 'auto',
      height: 'auto',
      padding: '0',
      '--desktop-left': '668px',
      '--desktop-top': '336px',
      '--tablet-left': '668px',
      '--tablet-top': '336px',
      '--mobile-left': '668px',
      '--mobile-top': '336px'
    }}><div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm" style={{borderCollapse: 'collapse', backgroundColor: '', color: ''}}>
            <caption className="mt-4 text-sm text-gray-500" style={{color: 'var(--theme-text-secondary, #64748b)'}}>Data Table</caption>
            <thead>
              <tr className="border-b transition-colors hover:bg-gray-100">
                <th className="p-4 align-middle font-medium text-left" style={{backgroundColor: 'var(--theme-surface, #f1f5f9)', color: 'var(--theme-text, #0f172a)', border: '1px solid var(--theme-border, #e2e8f0)'}}>Name</th><th className="p-4 align-middle font-medium text-left" style={{backgroundColor: 'var(--theme-surface, #f1f5f9)', color: 'var(--theme-text, #0f172a)', border: '1px solid var(--theme-border, #e2e8f0)'}}>Email</th><th className="p-4 align-middle font-medium text-left" style={{backgroundColor: 'var(--theme-surface, #f1f5f9)', color: 'var(--theme-text, #0f172a)', border: '1px solid var(--theme-border, #e2e8f0)'}}>Role</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b transition-colors hover:bg-gray-50">
            <td className="p-4 align-middle" style={{border: '1px solid var(--theme-border, #e2e8f0)'}}>John Doe</td><td className="p-4 align-middle" style={{border: '1px solid var(--theme-border, #e2e8f0)'}}>john@example.com</td><td className="p-4 align-middle" style={{border: '1px solid var(--theme-border, #e2e8f0)'}}>Admin</td>
          </tr><tr className="border-b transition-colors hover:bg-gray-50">
            <td className="p-4 align-middle" style={{border: '1px solid var(--theme-border, #e2e8f0)'}}>Jane Smith</td><td className="p-4 align-middle" style={{border: '1px solid var(--theme-border, #e2e8f0)'}}>jane@example.com</td><td className="p-4 align-middle" style={{border: '1px solid var(--theme-border, #e2e8f0)'}}>User</td>
          </tr><tr className="border-b transition-colors hover:bg-gray-50">
            <td className="p-4 align-middle" style={{border: '1px solid var(--theme-border, #e2e8f0)'}}>Bob Johnson</td><td className="p-4 align-middle" style={{border: '1px solid var(--theme-border, #e2e8f0)'}}>bob@example.com</td><td className="p-4 align-middle" style={{border: '1px solid var(--theme-border, #e2e8f0)'}}>Editor</td>
          </tr>
            </tbody>
          </table>
        </div></div>
        <div data-component-id="comp-2" className="absolute transition-all cursor-default" style={{
      left: '152px',
      top: '632px',
      width: 'auto',
      height: 'auto',
      padding: '0',
      '--desktop-left': '152px',
      '--desktop-top': '632px',
      '--tablet-left': '152px',
      '--tablet-top': '632px',
      '--mobile-left': '152px',
      '--mobile-top': '632px'
    }}><ResponsiveHoldToConfirm
          desktopProps={{"text":"Hold to confirm","buttonColor":"#ffffff","buttonTextColor":"#000000","borderRadius":"24px","holdDuration":2000,"circleColor":"var(--theme-primary, #3b82f6)","circleSize":1100,"circleMinWidth":50,"circleMaxWidth":100,"buttonWidth":"100%","buttonHeight":"auto"}}
          tabletProps={{"text":"Hold to confirm","buttonColor":"#ffffff","buttonTextColor":"#000000","borderRadius":"24px","holdDuration":2000,"circleColor":"var(--theme-primary, #3b82f6)","circleSize":1100,"circleMinWidth":50,"circleMaxWidth":100,"buttonWidth":"100%","buttonHeight":"auto"}}
          mobileProps={{"text":"Hold to confirm","buttonColor":"#ffffff","buttonTextColor":"#000000","borderRadius":"24px","holdDuration":2000,"circleColor":"var(--theme-primary, #3b82f6)","circleSize":1100,"circleMinWidth":50,"circleMaxWidth":100,"buttonWidth":"100%","buttonHeight":"auto"}}
        /></div>
      </div>
    </>
  )
}