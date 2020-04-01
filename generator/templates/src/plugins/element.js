<%_ if (options.dockerIgnore) { _%>
  import './.dockerignore'
  <%_ } _%>
  
  <%_ if (options.envAlpha) { _%>
  import './.env.alpha'
  <%_ } _%>
    