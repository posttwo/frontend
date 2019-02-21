import { Accounts } from 'meteor/accounts-base'

Accounts.emailTemplates.from = process.env.FROM_EMAIL || 'support@unee-t.com'
Accounts.config({
  sendVerificationEmail: true
})

Accounts.emailTemplates.verifyEmail = {
  subject () {
    return 'Verify Your Email'
  },
  text (user, url) {
    return `Thanks for joining Unee-T!

To verify your account email, simply click the link below.

${url}

Thanks,
The Unee-T Team`
  },
  html (user, url) {
    return `<img src="https://media.dev.unee-t.com/2019-02-21/logo.hmlet.png"><p>Thanks for joining Unee-T!</p>

<p>To verify your account email, simply click the link below.</p>

<a href=${url}>${url}</a>

<p>Thanks,<br>
The Unee-T Team</p>`
  }
}
