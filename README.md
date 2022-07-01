# Hiring Test

Thanks for taking the time to do our fullstack coding test. The challenge has two parts:

1. a [task](#task) to create a basic flight results front-end site to show flight prices

2. some [follow-up questions](./FOLLOW-UP.md)

---

You will be graded based on the following have been met:

- Your implementation works as described in the [task](#task).

- Your solution looks like the provided [design](#design).

---

## Task

The main items we are looking for are:

- Create a backend endpoint that fetches artwork from `https://api.artic.edu/api/v1/artworks` ([docs](https://api.artic.edu/docs/#quick-start)) and returns back a result in this format:

```
{
  artworks: [
    {
      id: number;
      title: string;
      image_url: string;
      artist_id: number;
      artist_title: string;
    },
    ....
  ]
}
```

Limit the `artworks` array to 10 results. To set the `image_url` refer to this [section](https://api.artic.edu/docs/#images).

- Use the returned data to display a page of results that matches the given design.

## Design

- The designs for the [desktop display is visible here](https://xd.adobe.com/view/23a39416-860d-4896-9161-ab3d4ea8ead6-76f0/). 
- [Responsive mobile designs can be found here](https://xd.adobe.com/view/f1ebdd59-a62d-4b07-aa79-fe13e24301ce-a4b8/).

## Implementation

- We'd like you to use [React](https://facebook.github.io/react/). On top of that, use whatever front-end libraries you feel comfortable with.
- We'd like you to use Ruby .NET for the backend implementation. If you're unable to do so, please let us know why in your email and pick a language you're comfortable in.

## Submission Guidelines

- The zip file should be named {yourname}.zip, and should itself contain the full-stack-recruitment-test project folder with your submission.

- The zip file should contain the [FOLLOW-UP.md](./FOLLOW-UP.md) file with answers to the follow-up questions.
