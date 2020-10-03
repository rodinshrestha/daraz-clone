import React from 'react'

 const ScrollbarProgress = () => {
     const [readingProgress, setReadingProgress] = React.useState(0);

     const scrollListener = () => {
      
        const winScroll = document.documentElement.scrollTop;
        
        const height    = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setReadingProgress((winScroll / height) * 100);
        
        

        

     };
     console.log(document.documentElement.scrollHeight , document.documentElement.clientHeight )
     React.useEffect(() => {
         window.addEventListener("scroll",scrollListener);

         return () => window.removeEventListener('scroll', scrollListener);
     },[])
     
    return (
        <div className={`reading-progress-bar`} style={{width: `${readingProgress}%`, backgroundColor : '#f57224', height : '5px'}} />
    )
}

export default ScrollbarProgress;