import classes from "./SignUp.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function SignUp() {
    return(
        <div className={classes.mainContainer}>
            <div className={classes.content}>
                <div className={classes.header}>Create An Account</div>
                <div className={classes.paragraph}>Create an account to be able to join queues!</div>
                <form>
                    <input type="email" name="Email" className={classes.email} placeholder={"Enter your email address"}/>
                    <input type="text" name="Username" className={classes.username} placeholder={"Enter your Username"}/>
                    <input type="password" name="Password" className={classes.password} placeholder={"Enter your Password"}/>
                    <input type="password" name="ConfirmPassword" className={classes.password} placeholder={"Confirm your Password"}/>

                    <input type="submit" value="Create Account" className={classes.submit} />
                    <div className={classes.paragraph}>Already have an Account? <span className={classes.signIn}>Sign In</span></div>

                </form>
            </div>
        </div>
    )
}

export default SignUp