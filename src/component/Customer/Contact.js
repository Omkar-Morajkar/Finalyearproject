import React from 'react';

const Contact = () =>{
    return(
        <>
            {/* Default form contact */}
            <form className="text-center border border-light p-5" action="#!">
            <p className="h4 mb-4">Contact us</p>
            {/* Name */}
            <input type="text" id="defaultContactFormName" className="form-control mb-4" placeholder="Name" />
            {/* Email */}
            <input type="email" id="defaultContactFormEmail" className="form-control mb-4" placeholder="E-mail" />
            {/* Subject */}
            <label>Subject</label>
            <select className="browser-default custom-select mb-4">
                <option value disabled>Choose option</option>
                <option value={1} selected>Feedback</option>
                <option value={2}>Report a bug</option>
                <option value={3}>Feature request</option>
                <option value={4}>Feature request</option>
            </select>
            {/* Message */}
            <div className="form-group">
                <textarea className="form-control rounded-0" id="exampleFormControlTextarea2" rows={3} placeholder="Message" defaultValue={""} />
            </div>
            {/* Copy */}
            <div className="custom-control custom-checkbox mb-4">
                <input type="checkbox" className="custom-control-input" id="defaultContactFormCopy" />
                <label className="custom-control-label" htmlFor="defaultContactFormCopy">Send me a copy of this message</label>
            </div>
            {/* Send button */}
            <button className="btn btn-info btn-block" type="submit">Send</button>
            </form>
            {/* Default form contact */}

        </>
    );
}
export default Contact;