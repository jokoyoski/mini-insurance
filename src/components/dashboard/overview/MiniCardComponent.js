import React from 'react';
import '../overview/content.styles.scss';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        border: '1px solid #DFE0EB',
        borderRadius: 4,
        cursor: 'pointer',
        height: 70,
        maxWidth: 350,
        padding: '24px 32px 24px 32px',
        ':hover': {
            borderColor: '#3751FF',
            ':nth-child(n) > span': {
                color: '#3751FF'
            }
        }
    },
    title: {
        color: '#9FA2B4',
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 19,
        lineHeight: '24px',
        letterSpacing: '0.4px',
        marginBottom: 12,
        minWidth: 102,
        textAlign: 'center'
    },
    value: {
        color: '#252733',
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 40,
        letterSpacing: '1px',
        lineHeight: '50px',
        textAlign: 'center'
    }
});

function MiniCardComponent({ className = '', title, value }) {
    const composedClassName = `${css(styles.container)} ${className}`;
    return (
        <div className='card-section'>
          <div className='inner-card-section'>
           <span style={{color:'black'}}>{title}</span>
           <span style={{color:'gray'}}>
             {value}
           </span>
          </div>
        </div>
    );
}

export default MiniCardComponent;