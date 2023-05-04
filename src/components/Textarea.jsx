import './_Textarea.scss';

function Textarea({ name, handleChange, value }) {
    return (
        <section className='textarea-container'>
            <textarea name={name} onChange={handleChange} value={value} placeholder='Add comment here' />
        </section>
    );
}

export default Textarea;