
import React from 'react';
import '../messages/message.styles.scss';

export const MessageComponent = () => {
    return (
        <div className='messages'>
            <div style={{display:'flex',flexDirection:'column'}}>
            <div style={{display:'flex',width:'20%',justifyContent:'space-between'}}>
            <img src="https://avatars3.githubusercontent.com/u/21162888?s=460&v=4" alt="avatar" className='avatar cursor-pointer' />
            <p style={{fontFamily:'Muli'}}>Jokoyoski Makanga</p>
            </div>
             <div className='message-text-box'>
                <p>Enter your message here</p>
             </div>
             <a href="#" className='submit-button'>Send Message</a>
             
            </div>
             
            


            <p>Inbox</p>
            <div className='avatar-message'>
            <img src="https://avatars3.githubusercontent.com/u/21162888?s=460&v=4" alt="avatar" className='avatar cursor-pointer' />
             <div>
             <p>Vivian Cole</p>
             <p>12.00am &nbsp; 1st March 2021</p>
                 </div>
              <p>I was unable to make my paymnet please help me i cant pay for the order</p>
            </div>

        </div>
    )
}

export default MessageComponent