import React from "react";
import PageTitle from "../Shared/PageTitle/PageTitle";
import javascriptVSnode from "../../Images/blog-img/javascriptVSnode.jpg";
import NodeVSmongo from "../../Images/blog-img/NodejsVSmongo.jpg";
import sqlVSnosql from "../../Images/blog-img/sqlVSnosql.jpg";
import jwt from "../../Images/blog-img/jwt.jpg";

const Blog = () => {
	return (
		<section className="py-20" data-aos="slide-right">
			<PageTitle title="Blog"></PageTitle>
			<div className="container mx-auto px-2">
				{/* xl:w-1/2 lg:w-3/4 w-full mx-auto */}
				<div>
					<div className="lg:flex border-2 border-slate-300 mt-6">
						<div>
							<img
								className="w-full lg:w-full lg:h-full"
								src={javascriptVSnode}
								alt=""
							/>
						</div>
						<div className="p-4 ml-4">
							<h2 className="text-2xl mb-2 italic">
								Difference between javascript and nodejs?
							</h2>
							<p>
								<span className="font-semibold">Ans: </span>
								Javascript: JavaScript is a programming language.
								JavaScript is used on client sites. JavaScript can only
								run on browsers. JavaScript is also called a high level
								programming language. JavaScript has many libraries and
								frameworks that make it easy to develop client sites.
								Among them: React, Angular and Vue.
								<br />
								<br />
								NodeJS is the runtime of JavaScript. NodeJS is not a
								programming language. NodeJS not only runs in browsers
								like JavaScript but also runs outside the browser with
								the help of nodes. NodeJS has some libraries and Express
								is one of them.
							</p>
						</div>
					</div>

					<div className="lg:flex border-2 border-slate-300 mt-6">
						<div>
							<img
								className="w-full lg:w-full lg:h-full"
								src={NodeVSmongo}
								alt=""
							/>
						</div>
						<div className="p-4 ml-4">
							<h2 className="text-2xl mb-2 italic">
								When should you use nodejs and when should you use
								mongodb?
							</h2>
							<p>
								<span className="font-semibold">Ans: </span>
								Node JS is used at the backend. The client brings the
								data from the site through API and puts it in the
								database. NodeJS thus connects to the database and the
								client site.
								<br />
								<br />
								MongoDB is a database. Data is stored in MongoDB. And is
								conveniently used. However, the backend server is close
								to exchanging data from MongoDB. Basically the main
								function of the database is to store the data
								beautifully.
							</p>
						</div>
					</div>

					<div className="lg:flex border-2 border-slate-300 mt-6">
						<div>
							<img
								className="w-full lg:w-full lg:h-full"
								src={sqlVSnosql}
								alt=""
							/>
						</div>
						<div className="p-4 ml-4">
							<h2 className="text-2xl mb-2 italic">
								Differences between sql and nosql databases?
							</h2>
							<p>
								<span className="font-semibold">Ans: </span>
								SQL Database classifies as relational database. SQL has
								episode defined schemas. SQL is called a table base
								database because all this data is in the form of tables
								or forms. SQL Database Complex is suitable as a query.
								<br />
								<br />
								No SQL Database does not classify as Relational
								Database. No SQL has dynamic schema. No SQL Database Key
								Value Pairs Collection. No SQL Database Complex is not
								suitable as a query.
							</p>
						</div>
					</div>

					<div className="lg:flex border-2 border-slate-300 mt-6">
						<div>
							<img
								className="w-full lg:w-full lg:h-full"
								src={jwt}
								alt=""
							/>
						</div>
						<div className="p-4 ml-4">
							<h2 className="text-2xl mb-2 italic">
								What is the purpose of jwt and how does it work?
							</h2>
							<p>
								<span className="font-semibold">Ans: </span>
								JWT is called JSON Web Token. Any API can be secured
								through JWT. JWT has three parts 1. Header, 2. Payload,
								3. ‍Signature JWT encrypts an email with a signature. It
								basically generates a token for the user while logging
								in to the website. By comparing the login with the
								email, the user gets access if the email is valid. This
								is how JWT basically works on different websites.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blog;
