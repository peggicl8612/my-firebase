// 操作 Firestore 資料庫的 CRUD 操作

import { db } from './firebase.js'
import { collection, addDoc, serverTimestamp, getDocs, doc, updateDoc, setDoc, deleteDoc } from 'firebase/firestore'
 // 新增多筆用戶資料
async function addData() {
    try { 
        const userRef = collection(db, 'user')
         for (let i = 0; i < 5; i++) {
             const docRef = await addDoc(userRef, {
                name: '使用者' + i,
                sex: i % 2 === 0 ? '男' : '女',
                regdate:  serverTimestamp(),
             }) 
             console.log('新增資料完成', docRef.id)
        }
        console.log('新增資料完成')
    } catch (error) {
        console.error('新增資料失敗', error)
} 
}
// addData()

// 讀取所有用戶資料
async function readData() {
    // collection 是讀取整個集合
    const userRef = collection(db, 'user')
    const snapshot = await getDocs(userRef)
    snapshot.forEach(doc => {
        console.log('讀取資料完成', doc.id, doc.data())
    })
    console.log('讀取資料完成', snapshot.size, '筆資料')
}
readData()

// 更新現有用戶資料
async function updateData(docId, updateFields) {
    try {
        // doc 是讀取單筆資料
        const docRef = doc(db, 'user', docId)
        await updateDoc(docRef, updateFields)
        console.log('更新資料完成', docId)
    } catch (error) {
        console.error('更新資料失敗', error)
    }
} 

/* updateData('o7WGowTIY7BLKJwQOUap', {
    name: 'coco',
    sex: '女',
    updatedAt: serverTimestamp(),
}) */

// 刪除現有用戶資料
async function deleteData(docId) {
    try {
        const docRef = doc(db, 'user', docId)
        await deleteDoc(docRef)
        console.log('刪除資料完成', docId)
    } catch (error) {
        console.error('刪除資料失敗', error)
    }
}

/* deleteData('o7WGowTIY7BLKJwQOUap', {
    name: 'coco',
    sex: '女',
    updatedAt: serverTimestamp(),
})
 */
 
export {addData, readData, updateData, deleteData}