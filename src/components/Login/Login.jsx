import { useUser } from '../../context/UserContext';
import './Login.css';

export default function Login() {
  const { loginAs } = useUser();

  return (
    <div className="login-page">
      <div className="login-container">

        <h1 className="login-heading">Login</h1>

        <div className="login-form">

          <div className="input-group">
            <label>Email</label>

            <div className="input-wrapper">
              <span className="input-icon">✉</span>

              <input
                type="email"
                placeholder="Example@email.com"
                disabled
              />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>

            <div className="input-wrapper">
              <input
                type="password"
                placeholder="********"
                disabled
              />

              <span className="input-icon">👁</span>
            </div>
          </div>

          <div className="button-group">
            <button
  className="login-btn primary"
  onClick={() => loginAs('u2')}
>
  Login as u2 (Active User)
</button>

<button
  className="login-btn secondary"
  onClick={() => loginAs('u1')}
>
  Login as u1 (New User)
</button>
          </div>

        </div>
      </div>
    </div>
  );
}