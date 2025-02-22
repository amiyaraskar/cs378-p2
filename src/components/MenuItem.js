import React from 'react';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.

const MenuItem = ({ imageName, title, description, price }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <img 
                        src={require(`../images/${imageName}`)} 
                        alt={title} 
                        className="rounded-3" 
                        style={{ width: "115%" }}
                    />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                        <p className="card-text-price">Price: ${price}</p>
                        <button className="rounded-4">
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;