import * as e from 'express';
import * as interview_ctrl from '../controllers/InterviewCtrl';

const router = e.Router();

// interview 생성 API
// 반환값 : interview_id
router.post('/v1/auth/create_interview', interview_ctrl.create_interview);

// interview 삭제 API
router.delete('/v1/auth/intreview/:interview_id', interview_ctrl.delete_interview);

// interview 리스트 조회 API
router.get('/v1/auth/interview_list', interview_ctrl.interview_list);

// interview 상세 조회 API
router.get('/v1/auth/interview/:interview_id', interview_ctrl.interview_detail);

// interview conversation
// 대화 세션 생성
/**
 * parmaeters : {
 *   interview_id: string,
 * }
 * output : {
 *   conversation_id: string,
 * }
 */
router.post('/v1/auth/interview/:interview_id/create_conversation', interview_ctrl.create_conversation);

// 대화 세션 관리 방법 고안 필요
/**
 * parameters : {
 *  interview_id: string,
 * }
 * input : {
 *  content: string,
 *  type: text,
 *  conv_seq: number, // 대화 순서 0인 경우 신규 대화 시작,
 * }
 * 
 * output : {
 *   content: string,
 *   next_conv_seq: number, // 다음 대화 순서를 제공.
 */
router.post('/v1/auth/interview/:interview_id/send_message', interview_ctrl.send_message);

export default router;