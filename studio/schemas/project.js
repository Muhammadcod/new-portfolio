export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'type',
      title: 'Project Type',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: []
        }
      ]
    },
    {
      title: 'Story',
      name: 'story',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: []
        }
      ]
    },
    {
      name: 'github',
      title: 'Github Link',
      type: 'string'
    },
    {
      name: 'demo',
      title: 'Demo Link',
      type: 'string'
    },
    {
      name: 'technology',
      title: 'Technology',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      title: 'DateCreated',
      name: 'dateCreated',
      type: 'date'
    }
  ],
  preview: {
    select: {
      title: 'project.name',
      name: 'project.name'
    }
  }
};
