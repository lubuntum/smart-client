import "../styles/breadcrumbs.css"

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const Breadcrumbs = ({ items }) => {
    return (
        <nav aria-label="Breadcrumb">
            <ol className="breadcrumbs">
                {items.map((item, index) => (
                    <li key={`breadcrumb${index}`} className="breadcrumbItem">
                        {index < items.length - 1 ? (
                            <span><Link to={item.path}>{item.label}</Link></span>
                        ) : (
                            <span>{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    )
}

Breadcrumbs.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired,
        })
    ).isRequired,
}