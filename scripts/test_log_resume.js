const prisma = require('../lib/prisma').default;

async function run(){
  try{
    const r = await prisma.profile_views.create({
      data: {
        viewer_id: '1b01d7d8-79dd-4b6d-a4fb-18a16e185260',
        candidate_id: 'bfb7100d-a7a1-42f0-a628-b6a4f7b0c30e',
        resume_viewed: true,
        resume_viewed_at: new Date()
      }
    });
    console.log('Created', r);
  }catch(e){
    console.error('ERR', e);
  }finally{
    process.exit();
  }
}
run();
