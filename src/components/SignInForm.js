import FadeInH1 from "./FadeInH1";

export default function SignInForm() {

    return (
        <div style={{width: "40%", margin: "0 auto", marginTop: "15%"}}>
            <FadeInH1/>
            <form>
                <div className="form-floating mb-2">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                    />
                        <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"/>
                        <label
                            htmlFor="floatingPassword">Password
                        </label>
                </div>
                <br/>
                <button
                    type="submit"
                    className="btn"
                    style={{backgroundColor:"#9400FF", color: "#ffffff"}}>Sign in
                </button>
            </form>
        </div>
    )
}