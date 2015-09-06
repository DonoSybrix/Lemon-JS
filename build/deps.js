// This file was autogenerated by depswriter.py.
// Please do not edit.
goog.addDependency('../../../../src/BlendMode.js', ['Lemon.BlendMode'], [], false);
goog.addDependency('../../../../src/Camera.js', ['Lemon.Camera'], ['goog.math', 'goog.vec.Mat4', 'goog.vec.Vec2', 'goog.vec.Vec3'], false);
goog.addDependency('../../../../src/Color.js', ['Lemon.Color'], [], false);
goog.addDependency('../../../../src/Context.js', ['Lemon.GetContext', 'Lemon.Private.Context'], [], false);
goog.addDependency('../../../../src/ContextResource.js', ['Lemon.Private.ContextResource'], [], false);
goog.addDependency('../../../../src/Extra/PostEffect.js', ['Lemon.PostEffect'], ['Lemon.Camera', 'Lemon.RenderTexture', 'Lemon.Sprite', 'Lemon.SpriteCommand'], false);
goog.addDependency('../../../../src/Extra/ProgramLibrary.js', ['Lemon.ProgramLibrary'], ['Lemon.Loaders.FileLoader', 'Lemon.Program'], false);
goog.addDependency('../../../../src/Geometry.js', ['Lemon.Geometry'], ['Lemon.Private.ContextResource', 'Lemon.VertexFormat'], false);
goog.addDependency('../../../../src/Image.js', ['Lemon.Image'], [], false);
goog.addDependency('../../../../src/Lights/DirectionalLight.js', ['Lemon.DirectionalLight'], ['Lemon.Light'], false);
goog.addDependency('../../../../src/Lights/Light.js', ['Lemon.Light'], ['Lemon.Color', 'Lemon.Node'], false);
goog.addDependency('../../../../src/Lights/PointLight.js', ['Lemon.PointLight'], ['Lemon.Light'], false);
goog.addDependency('../../../../src/Lights/SpotLight.js', ['Lemon.SpotLight'], ['Lemon.Light'], false);
goog.addDependency('../../../../src/Loaders/FileLoader.js', ['Lemon.Loaders.FileLoader'], [], false);
goog.addDependency('../../../../src/Loaders/ModelLoader.js', ['Lemon.Loaders.ModelLoader'], ['Lemon.Geometry', 'Lemon.Loaders.FileLoader', 'Lemon.Mesh'], false);
goog.addDependency('../../../../src/Material/Material.js', ['Lemon.Material'], ['Lemon.Pass'], false);
goog.addDependency('../../../../src/Material/Pass.js', ['Lemon.Pass', 'Lemon.PassParameter'], ['Lemon.Program', 'Lemon.StateBlock', 'Lemon.Type'], false);
goog.addDependency('../../../../src/Objects/Drawable.js', ['Lemon.Drawable'], ['Lemon.Node'], false);
goog.addDependency('../../../../src/Objects/Mesh.js', ['Lemon.Mesh'], ['Lemon.Drawable', 'Lemon.Geometry', 'Lemon.Material', 'Lemon.MeshCommand', 'Lemon.Program'], false);
goog.addDependency('../../../../src/Objects/Model.js', ['Lemon.Model'], ['Lemon.Loaders.ModelLoader', 'Lemon.Mesh'], false);
goog.addDependency('../../../../src/Objects/Skybox.js', ['Lemon.Skybox'], ['Lemon.Drawable', 'Lemon.Program', 'Lemon.SkyboxCommand', 'Lemon.TextureCube'], false);
goog.addDependency('../../../../src/Objects/Sprite.js', ['Lemon.Sprite'], ['Lemon.BlendMode', 'Lemon.Color', 'Lemon.Drawable', 'Lemon.Program', 'Lemon.SpriteCommand', 'Lemon.Texture'], false);
goog.addDependency('../../../../src/Program.js', ['Lemon.Program', 'Lemon.Program.Element'], ['Lemon.Loaders.FileLoader', 'Lemon.Private.ContextResource', 'Lemon.Type'], false);
goog.addDependency('../../../../src/Renderers/Commands/MeshCommand.js', ['Lemon.MeshCommand'], ['Lemon.Geometry', 'Lemon.Pass', 'Lemon.RenderCommand', 'Lemon.Type'], false);
goog.addDependency('../../../../src/Renderers/Commands/RenderCommand.js', ['Lemon.RenderCommand'], ['Lemon.RenderAPI'], false);
goog.addDependency('../../../../src/Renderers/Commands/SkyboxCommand.js', ['Lemon.SkyboxCommand'], ['Lemon.Geometry', 'Lemon.Program', 'Lemon.RenderCommand', 'Lemon.Type'], false);
goog.addDependency('../../../../src/Renderers/Commands/SpriteCommand.js', ['Lemon.SpriteCommand'], ['Lemon.Geometry', 'Lemon.RenderCommand', 'Lemon.StateBlock', 'Lemon.Type'], false);
goog.addDependency('../../../../src/Renderers/RenderAPI.js', ['Lemon.RenderAPI'], ['Lemon.Camera', 'Lemon.StateBlock', 'Lemon.VertexFormat'], false);
goog.addDependency('../../../../src/Renderers/RenderCanvas.js', ['Lemon.RenderCanvas'], ['Lemon.RenderAPI', 'Lemon.RenderAPI.WebGL', 'Lemon.RenderTarget'], false);
goog.addDependency('../../../../src/Renderers/RenderTarget.js', ['Lemon.RenderTarget'], ['Lemon.Private.Context', 'Lemon.RenderTask'], false);
goog.addDependency('../../../../src/Renderers/RenderTask.js', ['Lemon.RenderTask'], ['Lemon.RenderAPI'], false);
goog.addDependency('../../../../src/Renderers/RenderTexture.js', ['Lemon.RenderTexture'], ['Lemon.Image', 'Lemon.RenderAPI.WebGL', 'Lemon.RenderTarget', 'Lemon.Texture'], false);
goog.addDependency('../../../../src/Renderers/WebGL/Cache.js', ['Lemon.WebGL.Cache'], ['Lemon.Light'], false);
goog.addDependency('../../../../src/Renderers/WebGL/Instances.js', ['Lemon.WebGLObjects.BufferData', 'Lemon.WebGLObjects.Instances'], [], false);
goog.addDependency('../../../../src/Renderers/WebGL/RenderWebGL.js', ['Lemon.RenderAPI.WebGL'], ['Lemon.Color', 'Lemon.DirectionalLight', 'Lemon.PointLight', 'Lemon.Program', 'Lemon.RenderAPI', 'Lemon.SpotLight', 'Lemon.StateBlock', 'Lemon.TextureCube', 'Lemon.TextureVideo', 'Lemon.WebGL.Cache', 'Lemon.WebGLObjects.Instances', 'goog.webgl'], false);
goog.addDependency('../../../../src/Scene/Node.js', ['Lemon.Node'], ['Lemon.Transformable'], false);
goog.addDependency('../../../../src/Scene/Scene.js', ['Lemon.Scene'], ['Lemon.Node'], false);
goog.addDependency('../../../../src/StateBlock.js', ['Lemon.DepthFunction', 'Lemon.FaceCulling', 'Lemon.StateBlock', 'Lemon.StencilFunction', 'Lemon.StencilOperation'], ['Lemon.BlendMode'], false);
goog.addDependency('../../../../src/Textures/Texture.js', ['Lemon.Texture'], ['Lemon.Image', 'Lemon.Private.TextureInterface'], false);
goog.addDependency('../../../../src/Textures/TextureCube.js', ['Lemon.TextureCube'], ['Lemon.Image', 'Lemon.Private.ContextResource'], false);
goog.addDependency('../../../../src/Textures/TextureInterface.js', ['Lemon.Private.TextureInterface'], ['Lemon.Private.ContextResource'], false);
goog.addDependency('../../../../src/Textures/TextureVideo.js', ['Lemon.TextureVideo'], ['Lemon.Private.TextureInterface'], false);
goog.addDependency('../../../../src/Transformable.js', ['Lemon.Transformable'], ['goog.math', 'goog.vec.Mat4', 'goog.vec.Quaternion'], false);
goog.addDependency('../../../../src/Types.js', ['Lemon.Type'], [], false);
goog.addDependency('../../../../src/VertexFormat.js', ['Lemon.VertexElement', 'Lemon.VertexFormat'], [], false);