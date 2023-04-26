import './Button.scss';

function Button({ children, type}) {
    // children: text inside button (string)
    // type: primary, edit, delete (string)

    return (  
        <button className={type}>{children}</button>
    );
}

export default Button;