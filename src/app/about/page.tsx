import Navbar from '@/components/nav-bar'

export default async function AboutUs({ searchParams, ...rest }: any) {

    return (
        <div>
            <Navbar useThemedLogo withSearch />
            <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"></div>
            <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <p className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">This is meant to be silly</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A little about Roogle</h1>
                        <p className="mt-6 text-xl leading-8 text-gray-700">I created Roogle in February 2022 as a silly idea because I was annoyed that I had to tack on &quot;reddit&quot; to every Google query that I made.</p>
                    </div>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
                        <div className="relative lg:order-last lg:col-span-5">
                            <svg className="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]" aria-hidden="true">
                                <defs>
                                    <pattern id="e87443c8-56e4-4c20-9111-55b82fa704e3" width="200" height="200" patternUnits="userSpaceOnUse">
                                        <path d="M0.5 0V200M200 0.5L0 0.499983" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" stroke-width="0" fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)" />
                            </svg>
                            <figure className="border-l border-indigo-600 pl-8">
                                <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                                    <p>“I couldn&apos;t eat or sleep before I found out about Roogle. It has totally revolutionized my life. I have lost over 30 lbs since and my mental health has never been better. Thank you Roogle!”</p>
                                </blockquote>
                                <figcaption className="mt-8 flex gap-x-4">
                                    <img src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="mt-1 h-10 w-10 flex-none rounded-full bg-gray-50" />
                                    <div className="text-sm leading-6">
                                        <div className="font-semibold text-gray-900">Joe Fong</div>
                                        <div className="text-gray-600">An Advid Roogler</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
                            <p>Roogle is a web application or tool, that allows you to search for &quot;things&quot; on Google filter your searches only to relavent Reddit posts & sub Reddit. This saves you the stop of going to Google and having to do it yourself because I found myself doing it for almost every query that I wanted to hear some genuine reviews and feedback for. I was searching things like &quot;Best Gluten Free Breads Reddit&quot;, &quot;Places to Eat Vancouver Reddit&quot;... and the list goes on.</p>
                            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                                <li className="flex gap-x-3">
                                    <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
                                    </svg>
                                    <span><strong className="font-semibold text-gray-900">Search any sub Reddit.</strong> Search anything in the Reddit world.</span>
                                </li>
                                <li className="flex gap-x-3">
                                    <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                                    </svg>
                                    <span><strong className="font-semibold text-gray-900">Secure.</strong> Roogle does not save any of your searches so you don&apos;t need to worry about that.</span>
                                </li>
                                <li className="flex gap-x-3">
                                    <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                                        <path fill-rule="evenodd" d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z" clip-rule="evenodd" />
                                    </svg>
                                    <span><strong className="font-semibold text-gray-900">Database backups.</strong> Just kidding. Completely databaseless, a useful tool to anyone.</span>
                                </li>
                            </ul>
                            <p className="mt-8">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</p>
                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Whats next for Roogle?</h2>
                            <p className="mt-6">This is supposed to be a fun little app, so as I have more free time I will add features like Google Lens and Gemini AI Overviews but only for Reddit content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
