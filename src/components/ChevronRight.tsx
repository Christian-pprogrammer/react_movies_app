import React from 'react'

interface ChevronRightProps {
    className?: string;
}

const ChevronRight = ({className = ""}: ChevronRightProps) => {
    return (
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            className={`${className}`}
            style={
                {
                }
            }
            >
                <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
            </svg>
    )
}

export default ChevronRight
