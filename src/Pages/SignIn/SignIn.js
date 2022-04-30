import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialSignIn from "../Shared/SocialSignIn/SocialSignIn";

const SignIn = () => {
	const [signInWithEmailAndPassword, user, loading, LoginError] =
		useSignInWithEmailAndPassword(auth);

	const navigate = useNavigate();

	if (user) {
		navigate("/home");
	}

	const handleSignIn = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;
		console.log(email, password);

		signInWithEmailAndPassword(email, password);
	};
	return (
		<section className="py-20">
			<div className="container mx-auto">
				<div className="flex justify-center items-center w-full">
					<div className="w-[300px] ">
						<form
							onSubmit={handleSignIn}
							action=""
							className="bg-orange-100 p-4 rounded"
						>
							<h3 className="text-2xl text-center font-semibold">
								Sign In
							</h3>
							<div className="flex flex-col text-lg mb-3">
								<label htmlFor="email">Email Address</label>
								<input
									className="border py-1 px-2 mt-1"
									type="text"
									name="email"
									placeholder="Eamil Address"
								/>
							</div>
							<div className="flex flex-col text-lg mb-3">
								<label htmlFor="password">Password</label>
								<input
									className="border py-1 px-2 mt-1"
									type="password"
									name="password"
									placeholder="Password"
									required
								/>
							</div>
							<small className="text-red-500">
								{LoginError ? LoginError.message : ""}
							</small>
							<input
								className="bg-orange-500 hover:bg-orange-600 transition-all cursor-pointer w-full text-white py-2 rounded mt-4"
								type="submit"
								value={loading ? "Loading..." : "Sign In"}
							/>
						</form>
						<SocialSignIn></SocialSignIn>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignIn;