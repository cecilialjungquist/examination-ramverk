import './_Comment.scss';

function Comment({ comment }) {
    return (  
        <section className="comment">
            <p>
                <time dateTime={comment.date}>{comment.date}</time>
            </p>
            <p>{comment.body}</p>
        </section>
    );
}

export default Comment;