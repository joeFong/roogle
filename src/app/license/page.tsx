import Navbar from '@/components/nav-bar'

export default async function AboutUs({ searchParams, ...rest }: any) {

    return (
        <div>
            <Navbar useThemedLogo withSearch/>
            <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"></div>
            <div className="bg-white px-6 py-32 lg:px-8">
                <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">LICENSE</h1>
                    <p className="mt-6 text-xl leading-8">Copyright (c) 2023 Joe Fong</p>
                    <div className="mt-10 max-w-2xl">
                        <p>MIT License</p>

                        <p className="mt-8">Permission is hereby granted, free of charge, to any person obtaining a copy
                            of this software and associated documentation files (the &quot;Software&quot;), to deal
                            in the Software without restriction, including without limitation the rights
                            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                            copies of the Software, and to permit persons to whom the Software is
                            furnished to do so, subject to the following conditions:</p>

                        <p className="mt-8">The above copyright notice and this permission notice shall be included in all
                            copies or substantial portions of the Software.</p>

                        <p className="mt-8">THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                            SOFTWARE.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
