import './Input.scss';

function Input({ name, type, handleChange, value }) {

    return (  
        <section className="input">
            <label>{name}</label>
            <input name={name} type={type} onChange={handleChange} value={value} />
        </section>
    );
}

export default Input;