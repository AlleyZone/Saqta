import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex min-h-screen'>
            <section>
                <div>
                <Image 
                    src="/favicon.ico" 
                    alt="logo" 
                    width={16} 
                    height={16} 
                    classname="h-auto" 
                    />       
                </div>
            </section>
            {children}</div>
    )
}

export default Layout;