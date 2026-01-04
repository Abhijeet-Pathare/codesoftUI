import React from 'react'
import '../styles/SocialMedia.css'

const SocialMedia = () => {
  return (
    <section className='social-section'>
      <h2 className='social-title'>Connect with Codesoft</h2>
      <p className="social-subtitle">
        Follow us on social media for updates, tutorials, and more!
      </p>
      <div className="social-icons">
        <a
          href="https://www.instagram.com/codesoft__?igsh=MXNqbXNqbjRuOWUzdw=="
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon instagram"
        >
          <img
            src="https://img.icons8.com/color/48/000000/instagram-new.png"
            alt="Instagram"
          />
        </a>

        <a
          href="https://www.youtube.com/@maharashtrianCoder"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon youtube"
        >
          <img
            src="https://img.icons8.com/color/48/000000/youtube-play.png"
            alt="YouTube"
          />
        </a>
      </div>
    </section>
  )
}

export default SocialMedia
