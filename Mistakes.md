~Contact Page Error
``` 
errors is not a function
formState: {erorrs, isSubmitting} 
it's --> formState not --> formstate
```
 ~Razorpay is not defined
 ```
<Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
Script was not added
```
~Session not defined
```
Instead of checking if session is defined each time you need it, a good pattern is this one, you declare an Auth component :

function Auth({ children }: { children: JSX.Element }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const router = useRouter();
  const { status } = useSession({ required: true, onUnauthenticated() {
    router.push('/login');
  }, })

  if (status === "loading") {
    return <div>Loading...</div>
  }

  return children
}
And in your _app.tsx, you add it like this so session will always be defined:
  <Layout>
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
  </Layout>
So if you need a Page where session has always to be defined, you juste have to add an Auth property to your page, for exmaple if you have a page named 'account' :
Account.auth = {
    
}
And then, session will always be defined in your page or you'll be redirect to /login
```