// 測試Firebase Client端連線有無成功
import { db } from './firebase.js'
import { collection, getDocs, addDoc, doc, getDoc } from 'firebase/firestore'

async function testConnection() {
    try {
        console.log('Connecting to Firebase...')

        // 讀取現有集合
        const testCollection = collection(db, 'user')
        const snapshot = await getDocs(testCollection)
        console.log('連線成功', snapshot.size, '筆資料')
 
        // 新增一筆資料
        const testDoc = await addDoc(collection(db, 'test'), {
            message: '測試連線',
            timestamp: new Date(),
            status: 'connected'
        })
        console.log('新增資料成功', testDoc.id)

        // 讀取剛新增的資料
        const docRef = doc(db, 'test', testDoc.id)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            console.log('讀取資料成功', docSnap.data())
        }
        console.log('測試完成')
    } catch (error) {
        console.error('測試失敗', error)
    }
}

testConnection()