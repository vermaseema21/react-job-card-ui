import Card from "./Components/Card"

const data = [
{
"id": "job_001",
"logo": "https://w7.pngwing.com/pngs/832/502/png-transparent-amazon-logo-text-brand-amazon-text-service-retail-thumbnail.png",
"companyName": "Amazon",
"dateposted": "5 Days Ago",
"post": "Senior UI/UX Designer",
"tag1": "Full Time",
"tag2": "Junior Level",
"pay": "$65/hour",
"location": "Mumbai, India",
"applyLink": "https://careers.amazon.com/apply/job_001",
"saved": true
},
{
"id": "job_002",
"logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/250px-Google_%22G%22_logo.svg.png",
"companyName": "Google",
"dateposted": "2 Days Ago",
"post": "Product Designer",
"tag1": "Full Time",
"tag2": "Mid Level",
"pay": "$75/hour",
"location": "Bangalore, India",
"applyLink": "https://careers.google.com/jobs/job_002",
"saved": false
},
{
"id": "job_003",
"logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAvVBMVEX///8CpO9/uQLzUSP/uQH/uQD///7///v+/f////am2OoAmN324572tAD2TyLzUCbQ4KPs//93rwCItSbk7b7vxlr+//Kdwljrv6zfSBLt2MjVWz98rQD//+T//+7A6u3vyFUentTWXjNTrtzrv7LWXDju2cPz5N7myrz28Ojc5MDt8djOPQCcuFZypQDnwru+Zk3u1NWdwWbV4K/s37n29v/C3ulHqNBbr9DM6/Xy2IP157sel8cAiMrlqwBizZX+AAACfElEQVR4nO2bjVLTQBSFV0nvboAkFCVCtaFgW61V/Bcr6Ps/FrsJTlsFc7Kha2Z6vqad6cw2++25S2bInShFCCGEEEIIISQMAqKMHdoxJxEjWtsPmHD+SqOEkbrNCx0OD7xzqiqBas7Vzz+xi7dv+MStpPCR2h6y6fIZF8+r8fF4XL7reD2zUm8OUOa20s3FjJXScvz2BGQyUDp+dwhycaDd6T2lTnbSHXfUkT4fqDh/9hjkRTupNM1SBJtUXMBShy2TyrIszWpJJ1Ol8aSclGlTvgwqn01Kmkm1Kp8F21PhpFxSAA2lWm50Sv1/qZZ/fVuUFKUoRSlKUYpSlKIUpSi1xVL8x4FSlKIUpcJePKFbw5YgUpXX+/OJ4/xuJit8+Fjk+acnIBefXSfEp8FmjJkNppbBPUxX+DLTIvOnKHMXk09UjTpN2qh+3uQXtg6ebSODo7SOVdXGUrL+Wv9qpJTxlHJtvj5Oob8OUYrcq3ymLMW3y5cYl98XRTz7cYRy5bXRjXHN1929RyBnpyLDUQTQs0eyH9syelyn3G+aSGlVjOyMf7/Wv/aiJLQUEtStlMdlavNJhZPqXFLSwaQkhpJyWoGl6pOyUj0mxaSYFJNiUkyKSW1fUp2UYvmYFJNiUkyKSXUjqSD3pzqY1PWpaCflqEuqlPK5OewjNRz1lvPeS1Td8xSFPzviK3VWSiUlNVJJFAWSqpJabuXaPRVQ6p8ZLWkn9XMP5HohUhwlIL/8pFTZBlnswvRF4qt9lLlnZ635IrTEKF4pNcW4VYdYuWry0GFVC6gHp363owJYlcPrz/gADx3iPUh4BQq0fzCpNlMRQgghhBBCCNkEN/i86o6GE9fDAAAAAElFTkSuQmCC",
"companyName": "Microsoft",
"dateposted": "3 Days Ago",
"post": "UX Researcher",
"tag1": "Contract",
"tag2": "Senior Level",
"pay": "$85/hour",
"location": "Hyderabad, India",
"applyLink": "https://careers.microsoft.com/job_003",
"saved": false
},
{
"id": "job_004",
"logo": "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
"companyName": "Meta",
"dateposted": "1 Day Ago",
"post": "Interaction Designer",
"tag1": "Remote",
"tag2": "Senior Level",
"pay": "$90/hour",
"location": "Remote",
"applyLink": "https://careers.meta.com/job_004",
"saved": false
},
{
"id": "job_005",
"logo": "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
"companyName": "Apple",
"dateposted": "4 Days Ago",
"post": "Visual Designer",
"tag1": "Full Time",
"tag2": "Mid Level",
"pay": "$80/hour",
"location": "Cupertino, USA",
"applyLink": "https://jobs.apple.com/job_005",
"saved": false
},
{
"id": "job_006",
"logo": "https://1000logos.net/wp-content/uploads/2016/10/Adobe-Logo-1993.jpg",
"companyName": "Adobe",
"dateposted": "6 Days Ago",
"post": "UI Designer",
"tag1": "Part Time",
"tag2": "Junior Level",
"pay": "$60/hour",
"location": "Delhi, India",
"applyLink": "https://adobe.com/careers/job_006",
"saved": false
},
{
"id": "job_007",
"logo": "https://static.vecteezy.com/system/resources/previews/017/396/814/non_2x/netflix-mobile-application-logo-free-png.png",
"companyName": "Netflix",
"dateposted": "7 Days Ago",
"post": "Senior Product Designer",
"tag1": "Full Time",
"tag2": "Senior Level",
"pay": "$95/hour",
"location": "Los Angeles, USA",
"applyLink": "https://jobs.netflix.com/job_007",
"saved": false
},
{
"id": "job_008",
"logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU-0sgMITwNqzwWbNZfDxjhGmmje755YgLHQ&s",
"companyName": "Airbnb",
"dateposted": "8 Days Ago",
"post": "Experience Designer",
"tag1": "Contract",
"tag2": "Mid Level",
"pay": "$88/hour",
"location": "Remote",
"applyLink": "https://careers.airbnb.com/job_008",
"saved": false
},
{
"id": "job_009",
"logo": "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png",
"companyName": "Spotify",
"dateposted": "2 Days Ago",
"post": "UX Designer",
"tag1": "Full Time",
"tag2": "Mid Level",
"pay": "$78/hour",
"location": "Stockholm, Sweden",
"applyLink": "https://spotifyjobs.com/job_009",
"saved": false
},
{
"id": "job_010",
"logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEy0cgSHTCshtUnw9x-ArcasdhWQFF5ZIdbg&s",
"companyName": "Shopify",
"dateposted": "9 Days Ago",
"post": "Senior UX Designer",
"tag1": "Remote",
"tag2": "Senior Level",
"pay": "$92/hour",
"location": "Toronto, Canada",
"applyLink": "https://shopify.com/careers/job_010",
"saved": false
}
]
const App = () =>{
  return (
    <>
    <div className="parent">
   {data.map((elem, idx)=>{
    return <div key={idx}><Card company={elem.companyName} logo={elem.logo} post={elem.post} dateposted={elem.dateposted} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} applyLink={elem.applyLink} />
   </div>})}
  </div>
    </>
  )

}
export default App