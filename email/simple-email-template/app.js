class EmailTemplate{
    constructor(config){
        this.appName = config.from || 'my app'
        this.name = config.to || 'user'

        this.styleCdn = ''
        this.style = ''
        this.scriptCdn = ''

        this.successMessage = ''
        this.wellcomeMessage = ''

        this.divId = config.divId || 'app'
        this.html = null
        this.image = ''
    }
    create(){
        try{
            this._styleCdn()
            this._style()
            this._cdnScript()

            this._elementSuccessMessage()
            this._elementWellcomeMessage()
            this._html()

            return this.html
        }catch(err) {
            console.log(err)
        }
    }
    async appendToDiv(){
        this._styleCdn()
        this._style()
        this._cdnScript()

        this._addImageForHtmlEmail()
        this._elementSuccessMessage()
        this._elementWellcomeMessage()
        this._html()

        const targetDiv = document.getElementById(this.divId)
        targetDiv.innerHTML = this.html;
    }
    _styleCdn(){
        this.styleCdn = `
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/css/bootstrap.min.css" rel="stylesheet">
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        `
    }
    _style(){
        this.style = `
         <style type="text/css">
         body {
            margin-top:20px;
         }
         .mail-seccess {
            text-align: center;
            background: #fff;
            border-top: 1px solid #eee;
         }
         .mail-seccess .success-inner {
            display: inline-block;
         }
         .mail-seccess .success-inner h1 {
            font-size: 100px;
            text-shadow: 3px 5px 2px #3333;
            color: #006DFE;
            font-weight: 700;
         }
         .mail-seccess .success-inner h1 span {
            display: block;
            font-size: 25px;
            color: #333;
            font-weight: 600;
            text-shadow: none;
            margin-top: 20px;
         }
         .mail-seccess .success-inner p {
            padding: 20px 15px;
         }
         .mail-seccess .success-inner .btn{
            color:#fff;
         }
        </style>
        `
    }
    _elementSuccessMessage(){
        
        this.successMessage =  `
        ${this.image}
        <h3>
            <span>${this.name} Your account has been created, and your journey starts now.</span>
        </h3>
        `
    }
    _elementWellcomeMessage(){
        this.wellcomeMessage = `
            <p>
                Welcome aboard, ${this.name}! We're thrilled to have you join . 
                Your registration was successful, and you're now ready to start exploring everything 
                [${this.appName}] has to offer. To get started, we recommend completing your profile and checking out 
                our getting-started guide. We can't wait to see what you create!
            </p>
        `
    }
    _cdnScript(){
        this.scriptCdn = `
            <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/js/bootstrap.bundle.min.js"></script>
        `
    }
    _addImageForHtmlEmail(){
        if (this.image === '') { return this.image = '<h1><i class="fa fa-envelope"></i></h1>' }
        this.image = `<img src='${this.image}'></img>`
    }
    _html(){
        this.html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>Your Mail Sent Successfully - Bootdey.com</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            ${this.styleCdn}
            ${this.style}
        </head>
        <body>
        <section class="mail-seccess section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3 col-12">
                        <div class="success-inner">
                            ${this.successMessage}
                            ${this.wellcomeMessage}
                        </div>
                    </div>
                </div>
            </div>
        </section>
            ${this.scriptCdn}
        </body>
        </html>
        `
    }
}


export default EmailTemplate