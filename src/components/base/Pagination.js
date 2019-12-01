import { Link } from 'gatsby';

const Pagination = ( { numPages, currentPage, prefix } ) => {
    return (
        <div>
            {
                Array.from( { length: numPages } ).map(( _, i ) => (
                    <Link key={ i } to={ i === 0 ? `/${ prefix }` : `/${ prefix }/${ i + 1 }` }>
                        { i + 1}
                    </Link>
                ))
            }
        </div>
    )
}

export default Pagination;