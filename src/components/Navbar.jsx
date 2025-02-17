// 引入必要的模組和函數
import { Link } from 'react-router-dom'
import { useDarkMode } from '../context/DarkModeContext'
import { useState } from 'react'

// 定義 Navbar 組件
const Navbar = () => {
  // 使用 useDarkMode hook 來獲取當前模式狀態和切換函數
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  // 新增行動選單狀態
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // 導航欄容器，根據深色模式動態調整背景色
    <nav className="bg-indigo-600 dark:bg-gray-800 text-white transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* 左側 Logo 區域 */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">科技商城</Link>
          </div>
          
          {/* 漢堡選單按鈕 - 只在行動裝置顯示 */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-indigo-700 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label="開啟選單"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* 右側導航項目和功能按鈕 - 桌面版 */}
          <div className="hidden md:flex items-center space-x-4">
            {/* 商品列表連結 */}
            <Link to="/products" className="hover:text-gray-300">商品列表</Link>
            
            {/* 展示頁面連結 */}
            <Link to="/showcase" className="hover:text-gray-300">商品展示</Link>
            
            {/* 客製化頁面連結 */}
            <Link to="/custom" className="hover:text-gray-300">客製商品</Link>

            {/* 特賣活動連結 */}
            <Link to="/sale" className="hover:text-gray-300 relative group">
              <span>特賣活動</span>
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full h-4 w-4 flex items-center justify-center animate-pulse">
                !
              </span>
            </Link>
            
            {/* 關於我們連結 */}
            <Link to="/about" className="hover:text-gray-300">關於我們</Link>

            {/* 會員中心連結 */}
            <Link to="/profile" className="hover:text-gray-300">會員中心</Link>

            {/* 深色模式切換按鈕 */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-indigo-700 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="切換深色模式"
            >
              {isDarkMode ? (
                // 深色模式下顯示太陽圖標
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                // 淺色模式下顯示月亮圖標
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* 購物車按鈕 */}
            <Link to="/cart" className="relative">
              {/* 購物車圖標 */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {/* 購物車商品數量提示 */}
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </Link>
          </div>
        </div>

        {/* 行動裝置選單 */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} pt-2 pb-4 space-y-2`}>
          <Link to="/products" className="block px-3 py-2 rounded-md hover:bg-indigo-700 dark:hover:bg-gray-700">商品列表</Link>
          <Link to="/showcase" className="block px-3 py-2 rounded-md hover:bg-indigo-700 dark:hover:bg-gray-700">商品展示</Link>
          <Link to="/custom" className="block px-3 py-2 rounded-md hover:bg-indigo-700 dark:hover:bg-gray-700">客製商品</Link>
          <Link to="/sale" className="block px-3 py-2 rounded-md hover:bg-indigo-700 dark:hover:bg-gray-700 relative">
            特賣活動
            <span className="ml-2 inline-block bg-red-500 text-xs rounded-full h-4 w-4 text-center animate-pulse">!</span>
          </Link>
          <Link to="/about" className="block px-3 py-2 rounded-md hover:bg-indigo-700 dark:hover:bg-gray-700">關於我們</Link>
          <Link to="/profile" className="block px-3 py-2 rounded-md hover:bg-indigo-700 dark:hover:bg-gray-700">會員中心</Link>
          <Link to="/cart" className="block px-3 py-2 rounded-md hover:bg-indigo-700 dark:hover:bg-gray-700">
            購物車
            <span className="ml-2 inline-block bg-red-500 text-xs rounded-full h-4 w-4 text-center">0</span>
          </Link>
          <button
            onClick={toggleDarkMode}
            className="w-full text-left px-3 py-2 rounded-md hover:bg-indigo-700 dark:hover:bg-gray-700"
          >
            {isDarkMode ? '切換至淺色模式' : '切換至深色模式'}
          </button>
        </div>
      </div>
    </nav>
  );
};

// 導出 Navbar 組件
export default Navbar;
