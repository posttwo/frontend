import url from 'url'
import { createEngagementLink, resolveUserName, optOutHtml, optOutText } from './components/helpers'

export default (assignee, notificationId, settingType, caseTitle, caseId, user, message) => ({
  subject: `New message on case "${caseTitle}"`,
  html: `<img src="cid:logo@unee-t.com"/>

<p>Hi ${resolveUserName(assignee)},</p>

<p>New message by ${resolveUserName(user)}:</p>

<p><strong>${message}</strong></p>

<p>Please follow <a href='${
  createEngagementLink({
    url: url.resolve(process.env.ROOT_URL, `/case/${caseId}`),
    id: notificationId,
    email: assignee.emails[0].address
  })
  }'>${url.resolve(process.env.ROOT_URL, `/case/${caseId}`)}</a> to participate.</p>

  ` + optOutHtml(settingType, notificationId, assignee),
  text: `

Hi ${resolveUserName(assignee)},

New message by ${resolveUserName(user)}:

 > ${message}

  Please follow ${
  createEngagementLink({
    url: url.resolve(process.env.ROOT_URL, `/case/${caseId}`),
    id: notificationId,
    email: assignee.emails[0].address
  })
  } to participate.

  ` + optOutText(settingType, notificationId, assignee),
  attachments: [{
    path: 'https://media.dev.unee-t.com/2019-02-21/logo.hmlet.png',
    cid: 'logo@unee-t.com'
  }]
})
