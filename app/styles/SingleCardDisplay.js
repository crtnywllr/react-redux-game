const style = {
        center: {
          margin: '0 auto',
          textAlign: 'center'
        },
        container: {
          display: 'flex',
          flexWrap: 'wrap',
          maxWidth: '75%',
          margin: '5rem auto'
        },
        boxes: {
          fontFamily:'Merriweather' || 'serif',
          color: '#444',
          height: '50rem',
          flexGrow: '1',
          flexShrink: '0',
          margin: '0 2rem 2rem 2rem',
          padding: '2rem',
          border: '1px solid lightgray',
          background: 'white',
          boxShadow: '0 0 0 5px rgba(0,0,0,0.03)',
          position: 'relative',
          borderRadius: '4px',
          display: 'inline-block'
        },
        card: {
          flexBasis: 'calc(75% - 4rem)',
          display: 'flex',
          flexFlow: 'row wrap'
        },
        form: {
          flexBasis: 'calc(25% - 4rem)'
        },
        caption: {
          transform: 'rotate(-90deg)',
          maxWidth: '20%',
          height: '28rem',
          position: 'relative',
          marginLeft: '10rem'
        },
        cardDetails: {
          marginLeft: '-10rem',
          position: 'relative',
          textAlign: 'center',
          width: '75%',
          height: '40rem',
          backgroundColor: '#FEB600',
          borderRadius: '8px',
          title: {
            margin: '2rem auto',
            
          },
          points : {
            marginTop: '8rem'
          }
        },
        cardRules: {
          backgroundColor: '#fff',
          margin: '1rem auto',
          borderRadius: '8px',
          width: '90%',
          height: '16rem',
          paddingTop: '5rem'
        },
        rule: {
          margin: '1rem'
        },
        img: {
          width: '90%',
          display: 'block',
          margin:'0 auto'
        }
        
      }
      
export default style;