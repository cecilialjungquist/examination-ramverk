// import './_Input.scss';

function Input({ name, type, handleChange, value }) {
    let label = name;

    if (name === 'img') {
        label = 'image'
    } 

    return (  
        <section className="input">
            <label>{label}</label>
            <input name={name} type={type} onChange={handleChange} value={value} />
        </section>
    );
}

export default Input;