## simple email template

### how to use
##### **on web**
```<div id="app"></div> ```
```
<script type="module">
  import email from './htmlTemplate.js'
  new email().appendToDiv()
</script>
```

### on node js with node mailer
```
const html = emailTemplate.create()
const mailOptions = {
  from: from,
  to: email,
  subject: subject,
  html: html
};

const send = await transporter.sendMail(mailOptions);
```

**[File Template Link](https://www.bootdey.com/snippets/view/Your-Mail-Sent-Successfully)**

