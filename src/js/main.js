/* eslint-disable no-undef,  no-unused-vars */
import '../scss/styles.scss'
// Import all of Bootstrap's JS
import { Modal } from 'bootstrap'
import * as bootstrap from 'bootstrap'

import allPage from './allPages'
import contentPage from './contentPage'

document.addEventListener('DOMContentLoaded', () => {
  allPage.initialize()
  contentPage.initialize()
})

let resizeTimer

window.addEventListener('resize', () => {
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(() => {
    allPage.initialize()
  }, 250)
})

function createPrivacyModal() {
  const modalHtml = `
    <div class="modal fade" id="privacyModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Your Privacy Matters</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <p>At MyWebClass.org, we are committed to protecting your privacy and providing you with a transparent and secure online experience. To do this, we need your consent to collect and process your personal data.</p>
            <p>By clicking "I Agree," you consent to the collection, use, and storage of your personal data as described in our Privacy Policy. This information will be used to enhance your experience on our website, personalize content, and serve relevant advertisements.</p>
            <p>If you do not wish to provide your consent, please click "I Disagree." However, please note that some features of our website may not function properly without access to your personal data.</p>
            <p>For more information about how we handle your personal data, please review our <a href="privacy.html">Privacy Policy</a>. If you have any questions or concerns, do not hesitate to contact us at <a href="mailto: cyl4@njit.edu"> [Developer Email]</a>.</p>
            <p><a href="privacy.html">Privacy Policy</a> | <a href="contact.html">Contact Us</a></p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" id="disagreeButton">I Disagree</button>
            <button type="button" class="btn btn-primary" id="agreeButton">I Agree</button>
          </div>
        </div>
      </div>
    </div>
  `

  // Append the modal HTML to the body of the document
  document.body.insertAdjacentHTML('beforeend', modalHtml)
}

function initializePrivacyModal() {
  const privacyModal = new Modal(document.getElementById('privacyModal'))

  // Check if the user has already agreed to the policy
  const agreed = localStorage.getItem('privacyPolicyAgreed') === 'true'
  if (!agreed) {
    // Show the modal if the user hasn't agreed
    privacyModal.show()
  }

  // Handle the click event on the Agree button
  const agreeButton = document.getElementById('agreeButton')
  agreeButton.addEventListener('click', () => {
    // Remember the user's choice
    localStorage.setItem('privacyPolicyAgreed', 'true')
    // Hide the modal
    privacyModal.hide()
    // Enable Google Analytics tracking
    gtag('consent', 'update', {
      analytics_storage: 'granted'
    })
    // Trigger the Google Analytics event for button click
    gtag('event', 'privacy_consent', {
        'event_category': 'privacy',
        'event_label': 'consent_given',
        'value': 1
      });
    })

    // Handle the click event on the Disagree button
    const disagreeButton = document.getElementById('disagreeButton')
    disagreeButton.addEventListener('click', (event) => {
      event.preventDefault();
      // Remember the user's choice
      localStorage.setItem('privacyPolicyAgreed', 'false')
      // Disable Google Analytics tracking
      gtag('consent', 'update', {
        analytics_storage: 'denied'
      })
      // Hide the modal
      privacyModal.hide()
      // Redirect to GitHub
      window.location.href = 'https://github.com'
    })
  }

  function loadGoogleAnalytics() {
    // Replace "GA_MEASUREMENT_ID" with your Google Analytics Measurement ID
    const gaMeasurementId = 'J2FCEQRZJ1'

    // Load the Google Analytics tracking code
    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`
    script.async = true
    document.head.appendChild(script)

    // Initialize Google Analytics tracking
    window.dataLayer = window.dataLayer || []
    function gtag() { dataLayer.push(arguments) }
    gtag('js', new Date())
    gtag('config', gaMeasurementId, { anonymize_ip: true })

    // Check if the user has provided consent for Google Analytics tracking
    const consent = localStorage.getItem('googleAnalyticsConsent')
    if (consent === 'granted') {
      // Enable Google Analytics tracking if consent has been granted
      gtag('consent', 'update', {
        analytics_storage: 'granted'
      })
    } else if (consent === 'denied') {
      // Disable Google Analytics tracking if consent has been denied
      gtag('consent', 'update', {
        analytics_storage: 'denied'
      })
    } else {
      // Show the privacy modal if no consent has been given
      initializePrivacyModal()
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    createPrivacyModal()
    loadGoogleAnalytics()
    initializePrivacyModal()
  })