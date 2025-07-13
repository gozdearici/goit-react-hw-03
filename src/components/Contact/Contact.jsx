import React from 'react'
import { FaUser, FaPhone } from "react-icons/fa6";
import css from './Contact.module.css'

const Contact = ({id, name, phone, onDelete}) => {
  return (
    <div>
        <div key={id} className={css.contacts}>
            <div className={css.contactWrapper}>
                <div>
                    <p><FaUser /> {name}</p>
                </div>
                <div>
                    <p><FaPhone /> {phone}</p>
                </div>
            </div>
          <button onClick={() => onDelete(id)} className={css.deleteButton}>Delete</button>
        </div>
    </div>
  )
}

export default Contact