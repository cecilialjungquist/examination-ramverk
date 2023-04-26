import './Button.scss';

function Button({ children, type, onClick }) {
    // children: text inside button (string)
    // type: primary, edit, delete (string)

    return (  
        <button className={type} onClick={onClick}>{children}</button>
    );
}

export default Button;