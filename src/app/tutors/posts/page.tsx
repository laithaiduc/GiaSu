"use client";

import { useState } from 'react';
import { PlusCircle, Search, Clock, Users, Edit, Trash2 } from 'lucide-react';
import '../../students/posts/posts.css';
import ComboBox from '@/components/common/ComboBox';

export default function TutorPosts() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container" style={{paddingTop: '2rem', paddingBottom: '4rem'}}>
      <div className="flex-between" style={{marginBottom: '2rem'}}>
        <div>
          <h1 style={{color: '#D94625', fontSize: '2rem', marginBottom: '0.5rem'}}>Quản lý Bài đăng Tuyển Sinh</h1>
          <p className="text-muted">Đăng quảng bá lớp học của bạn để học sinh dễ dàng tìm thấy và đăng ký.</p>
        </div>
        <button className="btn btn-primary flex-center" style={{gap: '0.5rem'}} onClick={() => setIsModalOpen(true)}>
          <PlusCircle size={20} /> Tạo bài đăng mới
        </button>
      </div>

      <div className="card glass flex-between" style={{marginBottom: '2rem', padding: '1rem'}}>
        <div className="flex-center" style={{gap: '2rem'}}>
          <span style={{fontWeight: 600, color: 'var(--primary)', borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem'}}>Tất cả (2)</span>
          <span className="text-muted" style={{cursor: 'pointer'}}>Đang hiển thị (1)</span>
          <span className="text-muted" style={{cursor: 'pointer'}}>Đã ẩn (1)</span>
        </div>
        <div className="input-with-icon" style={{width: '300px'}}>
          <Search className="input-icon" size={18} />
          <input type="text" className="input-field" placeholder="Tìm kiếm bài đăng..." />
        </div>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
        {/* Post 1 */}
        <div className="card glass post-item">
          <div className="flex-between" style={{marginBottom: '1rem'}}>
            <span className="status-badge" style={{background: 'rgba(16, 185, 129, 0.1)', color: '#10B981'}}>Đang hiển thị</span>
            <div className="flex-center" style={{gap: '1rem'}}>
              <button className="text-muted" style={{background:'none', border:'none', cursor:'pointer'}}><Edit size={18}/></button>
              <button className="text-muted" style={{background:'none', border:'none', cursor:'pointer', color: '#DC2626'}}><Trash2 size={18}/></button>
            </div>
          </div>
          
          <h2 style={{fontSize: '1.25rem', marginBottom: '1rem'}}>Lớp Luyện thi Đại học môn Toán Khối A cấp tốc 3 tháng</h2>
          
          <div style={{display: 'flex', gap: '2rem', marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', flexWrap: 'wrap'}}>
            <span className="flex-center" style={{gap: '0.5rem'}}><Clock size={16}/> Đăng 2 ngày trước</span>
            <span className="flex-center" style={{gap: '0.5rem'}}><strong>Môn:</strong> Toán học</span>
            <span className="flex-center" style={{gap: '0.5rem'}}><strong>Hình thức:</strong> Học Online</span>
            <span className="flex-center" style={{gap: '0.5rem'}}><strong>Học phí:</strong> 250.000đ/buổi</span>
          </div>

          <div className="flex-between" style={{borderTop: '1px solid var(--border)', paddingTop: '1.5rem'}}>
            <span className="flex-center text-muted" style={{gap: '0.5rem'}}><Users size={18}/> 5 Học sinh đã đăng ký quan tâm</span>
            <button className="btn btn-outline" style={{padding: '0.5rem 1rem'}}>Xem danh sách Học sinh (5)</button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header flex-between">
              <h2>Tạo bài đăng Tuyển Sinh</h2>
              <button onClick={() => setIsModalOpen(false)} style={{background: 'none', border: 'none', cursor: 'pointer'}}><PlusCircle size={24} style={{transform: 'rotate(45deg)'}}/></button>
            </div>
            
            <form className="modal-form">
              <div className="form-group" style={{marginBottom: '1rem'}}>
                <label>Tiêu đề lớp học</label>
                <input type="text" className="input-field" placeholder="Ví dụ: Luyện thi IELTS mục tiêu 7.0 trong 6 tháng" />
              </div>
              
              <div className="form-grid" style={{marginBottom: '1rem'}}>
                <ComboBox label="Môn học" placeholder="Chọn môn học..." options={["Toán học", "Tiếng Anh", "Vật lý", "Hóa học", "Ngữ văn"]} />
                <ComboBox label="Hình thức học" placeholder="Chọn hình thức..." options={["Online", "Offline tại nhà học sinh"]} />
              </div>
              
              <div className="form-grid" style={{marginBottom: '1rem'}}>
                <div className="form-group">
                  <label>Học phí đề xuất (VNĐ/buổi)</label>
                  <input type="number" className="input-field" placeholder="Ví dụ: 200000" />
                </div>
                <div className="form-group">
                  <label>Số lượng tối đa</label>
                  <input type="number" className="input-field" placeholder="Ví dụ: 1 (kèm 1-1)" />
                </div>
              </div>
              
              <div className="form-group" style={{marginBottom: '2rem'}}>
                <label>Chi tiết nội dung giảng dạy</label>
                <textarea className="input-field" rows={5} placeholder="Mô tả lộ trình học, phương pháp, kết quả cam kết..."></textarea>
              </div>
              
              <div className="flex-center" style={{justifyContent: 'flex-end', gap: '1rem'}}>
                <button type="button" className="btn btn-outline" onClick={() => setIsModalOpen(false)}>Hủy bỏ</button>
                <button type="button" className="btn btn-primary" onClick={() => setIsModalOpen(false)}>Đăng bài (Chờ duyệt)</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
