import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear();
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {year} Almuntaser&Mohammad  . All Rights Reserved.
      </div>
    </footer>
  )
}
