const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.use('/node_modules', express.static('node_modules'))


// /////////////////////////
// form validation example page
// /////////////////////////

router.post('/form-handler', function (req, res) {

  // serverside routing logic here

  // redirect to form complete page
	res.redirect('form-submitted')

})



// choosing the account type to create
router.post('/account-choice', function (req, res) {

  let choice = req.session.data['account-choice']

  if (choice === 'personal') {
    res.redirect('version-2-1/create-account/personal-account/your-details')
  } else if (choice == 'uk-org') {
    res.redirect('version-2-1/create-account/uk-org-account/your-details')
  } else if (choice == 'os-org') {
    res.redirect('version-2-1/create-account/overseas-org-account/your-details')
  }
})


// whether user lives in the UK or not
router.post('/live-in-uk', function (req, res) {

  let choice = req.session.data['live-in-uk']

  if (choice === 'yes') {
    res.redirect('version-2-1/create-account/personal-account/uk-address')
  } else {
    res.redirect('version-2-1/create-account/personal-account/overseas-address')
  }
})


// whether user wants to partake in research
router.post('/personal-research', function (req, res) {

  let choice = req.session.data['personal-research']

  if (choice === 'yes') {
    res.redirect('version-2-1/create-account/personal-account/yes-research')
  } else {
    res.redirect('version-2-1/create-account/personal-account/check-answers')
  }
})


// whether user wants to partake in research
router.post('/uk-org-research', function (req, res) {

  let choice = req.session.data['uk-org-research']

  if (choice === 'yes') {
    res.redirect('version-2-1/create-account/uk-org-account/yes-research')
  } else {
    res.redirect('version-2-1/create-account/uk-org-account/check-answers')
  }
})


// whether user wants to partake in research
router.post('/overseas-org-research', function (req, res) {

  let choice = req.session.data['overseas-org-research']

  if (choice === 'yes') {
    res.redirect('version-2-1/create-account/overseas-org-account/yes-research')
  } else {
    res.redirect('version-2-1/create-account/overseas-org-account/check-answers')
  }
})


// which uk organisation type is chosen
router.post('/org-type', function (req, res) {

  let choice = req.session.data['org-type']

  if (choice === 'company') {
    res.redirect('version-2-1/create-account/uk-org-account/company-details')
  } else if (choice == 'charity') {
    res.redirect('version-2-1/create-account/uk-org-account/charity-details')
  } else if (choice == 'gov') {
    res.redirect('version-2-1/create-account/uk-org-account/gov-details')
  } else if (choice == 'la') {
    res.redirect('version-2-1/create-account/uk-org-account/la-details')
  }
})



module.exports = router
