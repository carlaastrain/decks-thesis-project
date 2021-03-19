import './HomePage.css';


export default function HomePage () {
  return (
 
    <div className='wrapperHomePage'> 
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@300&family=Playfair+Display&display=swap" rel="stylesheet"/>
      <div className="grid-container">
        <div className="grid-item"></div>
        <div className="grid-item">
          GO TO DECK <br/> MANAGEMENT<br/>
          <img src= 'assets/upload.svg' alt='upload icon' className='uploadIcon'/> 
        </div>
        <div className="grid-item"></div>
        <div className="grid-item grid-item-left"><div> SEE WHAT YOUR <br/>FRIENDS ARE DOING </div>
          <img src= 'assets/upload.svg' alt='upload icon' className='uploadIconLeft'/></div>
        <div className="grid-item grid-item-middle">CLICK HERE <br/> 
          <img src= 'assets/play.png' alt='play icon' className='playIcon'/> <br/> 
          <span> TO START TRAINING WITH </span> <br/> 
          <span> CURRENT DECK </span></div>
        <div className="grid-item grid-item-right">
          <img src= 'assets/upload.svg' alt='upload icon' className='uploadIconRight'/>
          <div> LEARNING <br/> STATISTICS </div>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item">
          <img src= 'assets/add.svg' alt='upload icon' className='uploadIconDown'/> <br/>
        CREATE NEW <br/> FLASHCARD</div>
        <div className="grid-item"></div>
      </div>
    </div>
  );
}
