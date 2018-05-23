import * as React from 'react';
import * as Scrivito from 'scrivito';
import './contactForm.html';
/* This html file is needed for Netlify form handling. Updates to inputs in this file should also be
added to contactForm.html as well. See the following link for details:
https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/
*/

Scrivito.provideComponent('ContactFormWidget', ({ widget }) => {
  const classNames = ['row'];
  if (widget.get('backgroundColor') === 'transparent') {
    classNames.push('panel-white-transparent');
  } else {
    classNames.push('floating-label', 'panel', 'panel-padding');
  }

  return (
    <div className={ classNames.join(' ') }>
      <form method="post">
        <input
          type="hidden"
          name="form-name"
          value="contact"
        />
        <div className="hidden">
          <label>Don’t fill this out: <input name="bot-field" /></label>
        </div>
		<div className="col-sm-4 col-sm-offset-4">
		  <h3>Contattaci</h3>
		</div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="contactName">Nome e Cognome</label>
            <input
              className="form-control input-lg"
              id="contactName"
              name="contactName"
              placeholder="Nome e Cognome"
              type="text"
              required
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="contactEmail">Indirizzo e-mail</label>
            <input
              className="form-control input-lg"
              id="contactEmail"
              name="contactEmail"
              placeholder="Indirizzo e-mail"
              type="email"
              required
            />
          </div>
        </div>

        <div className="col-sm-12">
          <div className="form-group">
            <label htmlFor="contactMessage">Scrivi il tuo messaggio</label>
            <textarea
              className="form-control input-lg"
              rows="3"
              id="contactMessage"
              name="contactMessage"
              placeholder="Scrivi il tuo messaggio"
              required
            />
          </div>
          {
            widget.get('agreementText') && <div className="checkbox">
              <label>
                <input
                  type="checkbox"
                  name="contactAgreement"
                  value={ widget.get('agreementText') }
                  required
                />
                { widget.get('agreementText') }
              </label>
            </div>
          }
          <button
            className="btn btn-primary btn-block"
            type="submit">
            { widget.get('buttonText') || 'send message' }
          </button>
        </div>
      </form>
    </div>
  );
});
