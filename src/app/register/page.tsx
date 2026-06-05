import Link from 'next/link';
import { Mail, Lock, User } from 'lucide-react';
import '../login/auth.css'; // Reuse auth.css

export default function Register() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <Link href="/" className="logo-auth">
            <div className="logo-auth-icon">G</div>
            <span style={{color: '#D94625', fontWeight: 800, fontSize: '1.25rem'}}>GIA SƯ KẾT NỐI</span>
          </Link>
          <h2>Tạo Tài Khoản</h2>
          <p>Bắt đầu hành trình học tập cùng chúng tôi.</p>
        </div>
        
        <form className="auth-form">
          <div className="form-group">
            <label>Vai trò của bạn</label>
            <div style={{display: 'flex', gap: '1.5rem', marginTop: '0.5rem'}}>
              <label style={{display: 'flex', gap: '0.5rem', alignItems: 'center', cursor: 'pointer', fontWeight: 600}}>
                <input type="radio" name="role" defaultChecked style={{accentColor: 'var(--primary)', width: '18px', height: '18px'}}/> Học sinh
              </label>
              <label style={{display: 'flex', gap: '0.5rem', alignItems: 'center', cursor: 'pointer', fontWeight: 600}}>
                <input type="radio" name="role" style={{accentColor: 'var(--primary)', width: '18px', height: '18px'}}/> Gia sư
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Họ và tên</label>
            <div className="input-with-icon">
              <User className="input-icon" size={20} />
              <input type="text" className="input-field" placeholder="Nhập họ và tên" />
            </div>
          </div>

          <div className="form-group">
            <label>Email</label>
            <div className="input-with-icon">
              <Mail className="input-icon" size={20} />
              <input type="email" className="input-field" placeholder="Nhập email của bạn" />
            </div>
          </div>
          
          <div className="form-group">
            <label>Mật khẩu</label>
            <div className="input-with-icon">
              <Lock className="input-icon" size={20} />
              <input type="password" className="input-field" placeholder="Tạo mật khẩu" />
            </div>
          </div>
          
          <Link href="/students" className="btn btn-primary" style={{width: '100%', marginTop: '0.5rem'}}>
            Đăng Ký Ngay
          </Link>
        </form>
        
        <p className="auth-footer">
          Đã có tài khoản? <Link href="/login" className="text-primary">Đăng nhập</Link>
        </p>
      </div>
    </div>
  );
}
