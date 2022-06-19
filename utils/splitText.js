export const splitText = ({text, className=''}) => {

    return (
        text.split('').map((letter) => 
            <div key={letter} className={className}>
                {letter}
            </div>
        )
    );
   
}