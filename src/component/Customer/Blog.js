import React from 'react';
import './Blog.css';

const Blog = () =>{

    return(
        <>
        <div id="Login" style={{marginLeft:'225px',marginTop:'40px'}} >
     
        <div className="text-center mb-5">
              <header className="blogdesign">
              {/* <h5 className="text-primary h6">Our Blog</h5> */}
              <h2 className="display-20 display-md-18 display-lg-16">
                Most recent our blog
              </h2>
              </header>
            </div>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-2-6">
                <article className="card card-style2">
                  <div className="card-img">
                    <img
                      className="rounded-top"
                      src="https://www.bootdey.com/image/350x280/6A5ACD/000000"
                      alt="..."
                    />
                    <div className="date">
                      <span>15</span>Sep
                    </div>
                  </div>
                  <div className="card-body">
                    <h3 className="h5">
                      <a href="#!">Loft therapy taking care of your home</a>
                    </h3>
                    <p className="display-30">
                      Loft therapy will be a thing of the past and here's why.
                    </p>
                    <a href="#!" className="read-more">
                      read more
                    </a>
                  </div>
                  <div className="card-footer">
                    <ul>
                      <li>
                        <a href="#!">
                          <i className="fas fa-user" />
                          Brittany Hucks
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="far fa-comment-dots" />
                          <span>26</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              
            </div>
          </div>
        </section>
        </div>
      </>
      
    );
}
export default Blog;