import { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link"

const Post = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  // Get the data of the post.
  const post = state.source[data.type][data.id];
  // Get the data of the author.
  const author = state.source.author[post.author];
  // Get a human readable date.
  const date = new Date(post.date);

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;


  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <>
      <div className="postTitle">
        <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

        {/* Hide author and date on pages */}
        {!data.isPage && (
          <div className="autherDate">
            {author && (
              <StyledLink link={author.link}>
                <Author>
                  By {author.name}
                </Author>
              </StyledLink>
            )}
            <DateWrapper>
              {" "}
              on {date.toDateString()}
            </DateWrapper>
          </div>
        )}
      </div>

      {data.isAttachment ? (
        // If the post is an attachment, just render the description property,
        // which already contains the thumbnail.
        <div dangerouslySetInnerHTML={{ __html: post.description.rendered }} />
      ) : (
        // Render the content using the Html2React component so the HTML is
        // processed by the processors we included in the
        // libraries.html2react.processors array.
        <Content >
          <Html2React html={post.content.rendered} />
        </Content>
      )}
    </>
  ) : null;
};

export default connect(Post);

const Container = styled.div`
  margin: 0;
  padding: 24px;

  .autherDate  p{
    color: gray;
  }
  
  .postTitle{
    display: flex;
    flex-direction: column;
    align-items: center;  
  }  
`;

const Title = styled.h1`
  margin: 0;
  
  margin-bottom: 8px;
  color: #eee;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
  text-decoration: none
`;

const Author = styled.p`
  color: #eee;
  font-size: 0.9em;
  display: inline;
`;

const DateWrapper = styled.p`
  color: #eee;
  font-size: 0.9em;
  display: inline;
`;

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div`
  color: #eee;
  word-break: break-word;
  padding: 12px; 

  @media screen and (min-width: 768px) {
    padding: 24px 48px;
  }

  @media screen and (min-width: 1200px) {
    padding: 24px 96px;
  }

  p {
    line-height: 1.6em;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    width: 75%;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: auto;
  }

  blockquote {
    margin: 16px 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }


  /* Input fields styles */

  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: #1f38c5;
    }
  }

  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: #fff;
    background-color: #1f38c5;
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;
